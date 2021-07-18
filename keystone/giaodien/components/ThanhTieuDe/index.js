import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

export default function ThanhTieuDe({ UI, change }) {
    const { loading, error, data } = useQuery(
        gql`
        query {
            authenticatedUser {
              id
              name
            }
        }`
    );
    let value = true;
    if (data?.authenticatedUser === null) { value = false };
    return <UI change={change} value={value} />
}
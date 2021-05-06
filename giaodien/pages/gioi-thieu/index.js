import { EditIcon } from "@chakra-ui/icons"
import { Editable, EditableInput, EditablePreview, Flex, IconButton, useEditableControls } from "@chakra-ui/react"
const GioiThieu = () => {
      
      /* Here's a custom control */
      function EditableControls() {
            const {
                  isEditing,
                  getSubmitButtonProps,
                  getCancelButtonProps,
                  getEditButtonProps,
            } = useEditableControls()

            return isEditing ? (
                  <ButtonGroup justifyContent="center" size="sm">
                        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
                  </ButtonGroup>
            ) : (
                        <Flex justifyContent="center">
                              <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
                        </Flex>
                  )
      }

      return (
            <Editable
                  textAlign="center"
                  defaultValue="Rasengan ⚡️"
                  fontSize="2xl"
                  isPreviewFocusable={false}
            >
                  <EditablePreview />
                  <EditableInput />
                  <EditableControls />
            </Editable>
      )
}
      
export default GioiThieu;

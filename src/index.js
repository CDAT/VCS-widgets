import GraphicsMethodEditForm from "./graphicsmethods"
import BooleansField from "./common/BooleansField"
import NumberField from "./common/NumberField"
import TemplateEditForm from './templates'

const SUPPORTED_GM_EDITORS = ["Gfb", "Gfi", "Gi"] // check GraphicsMethodEditForm.jsx for values.

const widgets = {
    GMEdit: GraphicsMethodEditForm,
    TemplateEdit: TemplateEditForm,
    BooleansField,
    NumberField
}

export { SUPPORTED_GM_EDITORS }
export default widgets
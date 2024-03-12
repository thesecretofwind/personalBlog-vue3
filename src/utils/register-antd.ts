import Antd from "ant-design-vue";
import { App } from "vue";

export function registerAntd(app: App<Element>) {
    app.use(Antd)
        
}
import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var powerBiTemplate11019E4F1F314377A1F3D8734F3D340A_DEBUG: IVisualPlugin = {
    name: 'powerBiTemplate11019E4F1F314377A1F3D8734F3D340A_DEBUG',
    displayName: 'PowerBiTemplate',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["powerBiTemplate11019E4F1F314377A1F3D8734F3D340A_DEBUG"] = powerBiTemplate11019E4F1F314377A1F3D8734F3D340A_DEBUG;
}

export default powerBiTemplate11019E4F1F314377A1F3D8734F3D340A_DEBUG;
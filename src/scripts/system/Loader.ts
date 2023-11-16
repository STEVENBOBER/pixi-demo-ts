import { LoaderType, AssetType } from "../../ts/types";

export class Loader {
    loader: LoaderType;
    config: AssetType;
    resources: { [key: string]: any };

    constructor(loader: LoaderType, config: AssetType) {
        this.loader = loader;
        this.config = config;
        this.resources = {};
    }

    preload(): Promise<void> {
        for (const asset of this.config.loader) {
            let key = asset.key.substr(asset.key.lastIndexOf('/') + 1);
            key = key.substring(0, key.indexOf('.'));
            if (asset.key.indexOf(".png") !== -1 || asset.key.indexOf(".jpg") !== -1) {
                this.loader.add(key, asset.data.default)
            }
        }

        return new Promise(resolve => {
            this.loader.load((_loader: LoaderType, resources: { [key: string]: any }) => {
                this.resources = resources;
                resolve();
            });
        });
    }
}
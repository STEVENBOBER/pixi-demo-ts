export class Tools {
    static massiveRequire(req: any) {
        const files: Array<{ key: string, data: any }> = [];

        req.keys().forEach((key: string) => {
            files.push({
                key, data: req(key)
            });
        });

        return files;
    }

}

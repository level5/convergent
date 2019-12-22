interface ReqestRecording {
    method: string;
    url: string;
    startTime: number;
    duration: number;
}

interface TreeView {
    children: TreeView[];
    label: string;
    count: number;
    totalDuration: number;
}


class TreeNode {
    static LIMIT = 50;

    static ASTRISK = '{:id}';

    children: {
        [pathName: string]: TreeNode
    };
    diffChildren: number;
    path: String;
    count: number;
    totalDuration: number;

    constructor(path: string, count: number, duration: number) {
        this.children = {};
        this.diffChildren = 0;
        this.count = count;
        this.totalDuration = duration;
    }

    public merge(node: TreeNode) {
        this.count += node.count;
        this.totalDuration += node.totalDuration;
        for(const name in node.children) {
            if (!this.children.hasOwnProperty(name)) {
                continue;
            }
            if (this.children[name]) {
                this.children[name].merge(node.children[name]);
            } else {
                this.children[name] = node.children[name];
                this.diffChildren += 1;
            }
        }
        if (this.diffChildren >= TreeNode.LIMIT) {
            this.aggregateChildren();
        }
    }

    public newRequest(request: ReqestRecording, paths: string[], offset: number) {
        if (offset >= paths.length) {
            return;
        }
        
        this.count++;
        this.totalDuration += request.duration;

        const pathName = paths[offset];
        if (this.diffChildren >= TreeNode.LIMIT) {
            this.children[TreeNode.ASTRISK].newRequest(request, paths, offset + 1);
            return;
        } 

        if (!this.children[pathName]) {
            this.diffChildren++;
            if (this.diffChildren >= TreeNode.LIMIT) {
                this.aggregateChildren();
            }
            this.children[pathName] = new TreeNode(pathName, 1, request.duration);
        }
        this.children[pathName].newRequest(request, paths, offset + 1);
    }

    private aggregateChildren() {
        const artrisk = new TreeNode(TreeNode.ASTRISK, 0, 0);
        for(const name in this.children) {
            if (!this.children.hasOwnProperty(name)) {
                continue;
            }
            artrisk.merge(this.children[name]);
        }
        this.children = {
            [TreeNode.ASTRISK]: artrisk
        };
    }
}


class TreeGraph {
    root: TreeNode;

    constructor(root: TreeNode) {
        if (!root) {
            this.root = new TreeNode('', 0, 0);
        } else {
            this.root = root;
        }
    }

    public newRequest(request: ReqestRecording) {
        const rootOfMethod = this.getRootOfMethod(request.method);
        const paths = request.url.split('/');
        rootOfMethod.newRequest(request, paths, 1);
    }
    
    public treeView(): TreeView {

    }

    private getRootOfMethod(method: string): TreeNode {
        return undefined;
    }

}
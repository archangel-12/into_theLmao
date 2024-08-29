const myRelationshipDance = new RelationShipDance();
myRelationshipDance.startDancing();

class RelationshipDance {
    constructor() {
        this.inTheDark = true;
        this.closeYetFar = true;
        this.memories = ['shared glances', 'soft touches', 'whispered words'];
        this.currentDance = null;
    }

    startDancing() {
        if (this.memories.length > 0) {
            this.currentDance = this.memories.shift();
            setTimeout(() => {
                if (this.memories.length === 0) {
                    this.inTheDark = false;
                    this.closeYetFar = false;
                } else {
                    this.startDancing();
                }
            }, 3000)
        }
    }
}
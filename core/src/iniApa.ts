let myRelationship = new ToxicRelationship();

class ToxicRelationship{
    private emotionalDistance: number;
    private honesty: boolean;
    private pridePlayed: boolean;
    
    constructor() {
        this.emotionalDistance = 100;
        this.honesty = false;
        this.pridePlayed = true;
    }

    public feel(numbed: boolean): void {
        if (numbed) {
            console.log("i'm already numb to it");
        } else {
            console.log("i don't wanna be feeling this way");
        }
    }

    public playGames(gamesPlayed: boolean): void {
        if (gamesPlayed) {
            console.log("you've played with my pride");
        } else {
            console.log("making me feel like we had something real");
        }
    }

    public seekClosure(missed: boolean): void {
        if (this.honesty && missed) {
            console.log("keeping you close, shouldn't be hard");
        } else {
            console.log("no matter what i say to you, you're gone");
        }
    }

    public tryToHoldOn(): void {
        if (this.emotionalDistance < 50) {
            console.log("i've been trying in vain to hold on");
        } else {
            console.log("it's easier hating you than missing you")
        }
    }
}

myRelationship.feel(true);
myRelationship.playGames(true);
myRelationship.seekClosure(false);
myRelationship.tryToHoldOn();
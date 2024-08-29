const songInspiration = new ThoseEyes();
songInspiration.reminisce();
songInspiration.closeEyesAndSeeYou();

class ThoseEyes {
    private emotions: string[];
    private moments: string[];

    constructor() {
        this.emotions = ['love', 'intimacy', 'longing'];
        this.moments = [
            'laughing out loud in a crowd',
            'getting lost at a club',
            'the touch of a hand',
            'making love',
            'looking up and giving those eyes'
        ];
    }

    public reminisce(): void {
        this.moments.forEach((moment) => {
            console.log('remembering: ${moment}');
            this.reflectEmotion();
        });
    }

    private reflectEmotion(): void {
        this.emotions.forEach((emotion) => {
            console.log('feeling: ${emotion}');
        });
    }

    public closeEyesAndSeeYou(): void {
        console.log('closing my eyes...');
        this.moments.forEach((moment) => {
            console.log("all i see is you: ${moment}");
        });
    }
}
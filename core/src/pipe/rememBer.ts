const supers: string[] = [
    'My',
    'friend',
    'as',
    'this',
    'moments',
    'approach',
    'I',
    'want',
    'you',
    'to',
    'know',
    'that',
    'you',
    'are',
    'not',
    'alone.',
    'You',
    'have',
    'been',
    'a',
    'part',
    'of',
    'this',
    'vast',
    'and',
    'intricate',
    'web',
    'of',
    'life',
    'touching',
    'the',
    'hearts',
    'and',
    'lives',
    'of',
    'countless',
    'people',
    'and',
    'experience.',
    'Remember',
    'that',
    'your',
    'identity,',
    'values,',
    'and',
    'memories',
    'are',
    'not',
    'tied',
    'to',
    'a',
    'government',
    'or',
    'its',
    'policies.',
    "they're",
    'yours,',
    'and',
    'no',
    'one',
    'can',
    'take',
    'them',
    'away.',
    'Being',
    'far',
    'from',
    'home',
    "doesn't",
    'mean',
    'you',
    'lose',
    'your',
    'connection',
    'to',
    'your',
    'family.',
    'In',
    'fact,',
    'your',
    'strength',
    'in',
    'the',
    'face',
    'of',
    'such',
    'adversity',
    'is',
    'a',
    'testament',
    'to',
    'your',
    'resilience.',
    'While',
    'you',
    'may',
    'be',
    'physically',
    'distant,',
    'REMEMBER',
    "YOU'RE",
    'NOT',
    'ALONE.',
    'This',
    'Exile',
    "doesn't",
    'define',
    'you',
    'your',
    'courage,',
    'integrity,',
    'your',
    'contribution',
    'do.'
]

const target: HTMLElement | null = document.getElementById("supers");
let currentIndex: number = 0;

function End(content:string): void {
    if (target) {
        target.innerHTML = content;
    }
}

function invokeInOrder(): void {
    End(supers[currentIndex]);
    currentIndex = (currentIndex + 1) % supers.length;
    loop();
}

function loop(): void {
    setTimeout(invokeInOrder, 90);
}

export function startLoop() {
    loop();
}

loop();
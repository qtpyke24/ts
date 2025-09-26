"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocorrect = autocorrect;
const vocabulary_1 = require("../data/vocabulary");
const vocabulary = (0, vocabulary_1.loadVocabulary)();
function levenshtein(a, b) {
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++)
        dp[i][0] = i;
    for (let j = 0; j <= b.length; j++)
        dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        }
    }
    return dp[a.length][b.length];
}
function autocorrect(word) {
    let best = vocabulary[0];
    let minDist = levenshtein(word, best);
    for (const candidate of vocabulary) {
        const dist = levenshtein(word, candidate);
        if (dist < minDist) {
            best = candidate;
            minDist = dist;
        }
    }
    return best;
}

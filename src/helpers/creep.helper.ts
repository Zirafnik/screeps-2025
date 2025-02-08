export function calculateCreepCost(body: BodyPartConstant[]): number {
    const costs = {
        MOVE: 50,
        WORK: 100,
        CARRY: 50,
        ATTACK: 80,
        RANGED_ATTACK: 150,
        HEAL: 250,
        CLAIM: 600,
        TOUGH: 10,
    };

    let sum = 0;
    for (const part of body) {
        sum += costs[part];
    }

    return sum;
}

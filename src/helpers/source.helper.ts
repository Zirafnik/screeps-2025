export function getEmptySourceSpots(pos: RoomPosition): Array<[number, number]> {
    const { x, y } = pos;

    // Check all sides around the pos
    // prettier-ignore
    const sidesToCheck: Array<[number, number]> = [
        [x-1, y+1], [x, y+1], [x+1, y+1],
        [x-1, y  ],           [x+1, y  ],
        [x-1, y-1], [x, y-1], [x+1, y-1],
    ];

    const roomTerrain = Game.map.getRoomTerrain(pos.roomName);

    const sourceMiningCoords = [];

    for (const side of sidesToCheck) {
        const terrain = roomTerrain.get(...side);

        if (terrain === TERRAIN_MASK_WALL) {
            continue;
        } else {
            sourceMiningCoords.push(side);
        }
    }

    return sourceMiningCoords;
}

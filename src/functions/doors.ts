import DoorModel from "../model/door";

export function createDoors(quantity: number, withGift: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number === withGift;

    return new DoorModel(number, hasGift, false, false);
  });
}

export function updateDoors(
  doors: DoorModel[],
  modifiedDoor: DoorModel
): DoorModel[] {
  return doors.map((door) => {
    const isModifiedDoor = door.number === modifiedDoor.number;

    if (isModifiedDoor) {
      return modifiedDoor;
    }

    return door.opened ? door : door.deselect();
  });
}

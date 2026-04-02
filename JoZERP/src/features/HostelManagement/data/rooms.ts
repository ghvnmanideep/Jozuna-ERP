export interface Room {
  id: string;
  capacity: number;
  occupied: number;
  maintenance?: boolean;
}

export const rooms: Room[] = Array.from({ length: 20 }, (_, index) => {
  const roomNumber = 101 + index;

  return {
    id: `A-${roomNumber}`,   
    capacity: 4,
    occupied: Math.floor(Math.random() * 5),
    maintenance: roomNumber === 114
  };
});
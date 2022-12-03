enum Gender {
    Male,
    Female
}

console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[1]);
console.log(Gender[0]);


enum WeekEnds {
    Saturday = 6,
    Sunday = 7
}

console.log(WeekEnds[6]);
console.log(WeekEnds[7]);

enum directions{
    up,
    down,
    left,
    right
}
console.log(directions.up);
console.log(directions.right);

enum ClientResponse{
    No = 0,
    Yes = 1,
  }
console.log(ClientResponse[0]);
console.log(ClientResponse[1]);
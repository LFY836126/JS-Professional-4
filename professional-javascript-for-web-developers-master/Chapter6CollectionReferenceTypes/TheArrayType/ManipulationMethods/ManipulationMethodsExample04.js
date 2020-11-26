let colors = ["red", "green", "blue"];
let removed = colors.splice(0,1);  // remove the first item
alert(colors);                     // green,blue
alert(removed);                    // red - one item array
           
removed = colors.splice(1, 0, "yellow", "orange");  // insert two items at position 1
alert(colors);                                      // green,yellow,orange,blue
alert(removed);                                     // empty array
           
removed = colors.splice(1, 1, "red", "purple");  // insert two values, remove one
alert(colors);                                   // green,red,purple,orange,blue
alert(removed);                                  // yellow - one item array

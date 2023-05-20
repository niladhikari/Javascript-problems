var friend1 = 'Mahbub', friend2 = 'puja';
var middleFriend = friend1;
friend1 = friend2;
friend2 = middleFriend;
console.log('After swap :Friend1='+friend1+',friend2='+friend2);

//another way to swap

var x = 6, y = 8;
 x = x + y;
 y = x - y;
 x = x - y;
 console.log('After swap :x='+x+',Y='+y);

 //shortcut way to swap

 var a = 8 , b = 6;
  [a,b] = [b,a];
  console.log('After swap :a='+a+',b='+b);
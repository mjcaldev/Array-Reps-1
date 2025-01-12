// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const preTwoThousand = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1900)
    console.table(preTwoThousand)
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const names = inventors.map(inventor => `${inventor.first} ${inventor.last} is an inventor.`)
    console.table(names)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const sortedGroup = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(sortedGroup)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const totalYears = inventors.reduce((sum, currInventor) => sum + (currInventor.passed - currInventor.year), 0);
    console.log([totalYears])

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort(function(a, b) {
      curr = a.passed - a.year; // could use (a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1;
      next = b.passed - b.year; // using variables for readability despite the SLIGHTLY slower performance
      return curr > next ? 1 : -1;
    }) 
    console.table(oldest)

    //ALL BELOW COMMENTED OUT AS IT REQUIRES RUNNING IN THE BROWSER CONSOLE OF THE BELOW LINK
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const boulevards = document.querySelector('.mw-category'); // now we use Array.from or ... to make the Node list an array
    // const bLinks = Array.from(boulevards.querySelectorAll('a')); // this extra step is just to display that I can call querySelector on more than just document but on ANY DOM element
    // const de = bLinks
    // .map(a => a.textContent)
    // .filter(street => /\bde\b(?!s)/i.test(street)); // cool little regex to match de or De and ommit des


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    
    // const alpha = people.sort((a, b) => {
    //   const [aLast, aFirst] = a.split(', '); //destructure to skip creating arrays
    //   const [bLast, bFirst] = b.split(', '); //could keep in array and use reduce
    //   return aLast > bLast ? 1 : -1;
    // })
    // console.table(alpha)
    //const alphabetical = inventors.sort((a, b) => a.last.localeCompare(b.last)); //Elegant Approach
    // const alphaLast = people.reduce((sorted, currPerson) => {
    //   const [lastName] = currPerson.split(', ');
    //   let inserted = false;

    //   // Insert reorganized people person by person into array
    //   for (let i = 0; i < sorted.length; i++) {
    //     const [sortedLastName] = sorted[i].split(', ');
    //     if(lastName.localeCompare(sortedLastName) < 0) {
    //       sorted.splice(i, 0, currPerson);
    //       inserted = true;
    //       break;
    //     }
    //   }
    //   if(!inserted) {
    //     sorted.push(currPerson)
    //   }

    //   return sorted;
    // }, []);

    // console.table(alphaLast)
    

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transport = data.reduce((obj, item) => {
      if(!obj[item]) { //here we check if there is already an item. If not, we initialize the new key with a value of 0;
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
    console.log(transport)
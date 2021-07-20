// const menu = [
//     {
//       id: 1,
//       title: "buttermilk pancakes",
//       category: "breakfast",
//       price: 15.99,
//       img: "./images/item-1.jpeg",
//       desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//     },
//     {
//       id: 2,
//       title: "diner double",
//       category: "lunch",
//       price: 13.99,
//       img: "./images/item-2.jpeg",
//       desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//     },
//     {
//       id: 3,
//       title: "godzilla milkshake",
//       category: "shake",
//       price: 6.99,
//       img: "./images/item-3.jpeg",
//       desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//     },
//     {
//       id: 4,
//       title: "country delight",
//       category: "breakfast",
//       price: 20.99,
//       img: "./images/item-4.jpeg",
//       desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//     },
//     {
//       id: 5,
//       title: "egg attack",
//       category: "lunch",
//       price: 22.99,
//       img: "./images/item-5.jpeg",
//       desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//     },
//     {
//       id: 6,
//       title: "oreo dream",
//       category: "shake",
//       price: 18.99,
//       img: "./images/item-6.jpeg",
//       desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//     },
//     {
//       id: 7,
//       title: "bacon overflow",
//       category: "breakfast",
//       price: 8.99,
//       img: "./images/item-7.jpeg",
//       desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//     },
//     {
//       id: 8,
//       title: "american classic",
//       category: "lunch",
//       price: 12.99,
//       img: "./images/item-8.jpeg",
//       desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//     },
//     {
//       id: 9,
//       title: "quarantine buddy",
//       category: "shake",
//       price: 16.99,
//       img: "./images/item-9.jpeg",
//       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//     },
//     {
//       id: 10,
//       title: "bison steak",
//       category: "dinner",
//       price: 22.99,
//       img: "./images/item-10.jpeg",
//       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//     },
//   ];
// //   getting parentelements
// const sectionCenter = document.querySelector('.section-center');
// const btnContainer= document.querySelectorAll('.btn-container')



// window.addEventListener("DOMContentLoaded", function () {
//   displaymenuitems(menu);
//   displayMenuButtons();//calling the function to add buttons
//   // displayMenuButtons();//this function is not called right now

// });

// function displaymenuitems(Menuitems) {
//   let displayMenu = Menuitems.map(function (item) {
//     // we can only use map wiht some kind of function always
//     return`<article class="menu-item">
//     <img src=${item.img} alt=${item.title}class="photo">
//     <div class="item-info">
//         <header>
//             <h4>${item.title}</h4>
//             <h4 class="price">${item.price}</h4>
//         </header>
//         <p class="item-text">
//             ${item.desc}
//         </p>
//     </div>
// </article>`
// //  and the flow of the data is from menu->menuitems->items
// });
// //    after running the function it will display the value in form of of a string so to combine all that together into one usable array we need to use join function
//    displayMenu = displayMenu.join('');
//   // ^ this is to make it into a string so that it can be used as html
//     sectionCenter.innerHTML = displayMenu
// }
// // usage of return in this condition is very amazing 
// // function displayMenuButtons() {
// //   const categories = menu.reduce(
// //     function (values, item) {
// //       if (!values.includes(item.category)) {
// //         values.push(item.category);
// //       }
// //       return values;
// //     },
// //     ["all"]
// //   );
// //   const categoryBtns=categories.map(
// //     function (hola) {
// //       return`<button type="button" class="filter-btn" data-id="${hola}">${hola}</button>`
// //     }
// //   ).join("");
// //   console.log(categoryBtns);
// //   btnContainer.innerHTML = categoryBtns;
// //   // afterthebuttonsare added iam calling the function to add filter the content according to the button
  
  

  
// //     const filterBtns = btnContainer.querySelectorAll(".filter-btn")
// //     console.log(filterBtns);
// //     filterBtns.forEach(function (btn) {
// //       btn.addEventListener("click",function (e) {
// //         // e is a function thst can check which button or which event is happening at the moment
// //         // then we can use that e to target the event
// //         const category = e.currentTarget.dataset.id;
// //       // this check which button is clicked frim the html side
// //         const menuCategory = menu.filter(function (menuitems) {
          
// //           if(menuitems.category==category)
// //           return menuitems;
// //         });
// //         if (category=='all') {
// //           displaymenuitems(menu);
// //         } else {
// //           displaymenuitems(menuCategory);
// //         }
// //         console.log(menuCategory);
// //       });
// //     });
// //     // filtersection overs here
    
    
    

// //   }
// function displayMenuButtons() {
//   const categories = menu.reduce(
//     function (values, item) {
//       if (!values.includes(item.category)) {
//         values.push(item.category);
//       }
//       return values;
//     },
//     ["all"]
//   );
//   const categoryBtns = categories
//     .map(function (category) {
//       return `<button type="button" class="filter-btn" data-id=${category}>
//           ${category}
//         </button>`;
//     })
//     .join("");

//   btnContainer.innerHTML = categoryBtns;
//   const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//   console.log(filterBtns);

//   filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       // console.log(e.currentTarget.dataset);
//       const category = e.currentTarget.dataset.id;
//       const menuCategory = menu.filter(function (menuItem) {
//         // console.log(menuItem.category);
//         if (menuItem.category === category) {
//           return menuItem;
//         }
//       });
//       if (category === "all") {
//         diplayMenuItems(menu);
//       } else {
//         diplayMenuItems(menuCategory);
//       }
//     });
//   });
// }
const menu = [
    {
      id: 1,
      title: "samosa",
      category: "breakfast",
      price: 15,
      img: "./images/samosa.jpg",
      desc: `A samosa  is a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, cheese, beef and other meats, or lentils. ... Samosas are a popular entrée, appetizer, or snack in the local cuisines of South Asia, Western Asia, Southeast Asia, the Mediterranean, and Africa.
      `,
    },
    {
      id: 2,
      title: "chicken tikka",
      category: "lunch",
      price: 413,
      img: "./images/tikka.jpg",
      desc: `It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken. . It is also a chicken dish served in Punjabi cuisine. `,
    },
    {
      id: 3,
      title: "Malai lassi",
      category: "shakes",
      price: 60,
      img: "./images/lassi.jpg",
      desc: `creamy, frothy yogurt-based drink, blended with water and various fruits or seasonings (such as salt or sugar), that originated in Punjab,`,
    },
    {
      id: 4,
      title: "protein breakfast",
      category: "breakfast",
      price: 50,
      img: "./images/item-4.jpeg",
      desc: `Bread Omelet is a very easy, Indian breakfast menu, in which bread is cooked along with omelet itself. It makes a great combo with tomato ketch up or chutney `,
    },
    {
      id: 5,
      title: "egg attack burger",
      category: "lunch",
      category: "breakfast",
      price: 150,
      img: "./images/item-5.jpeg",
      desc: `A  burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.
      `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 200,
      img: "./images/item-6.jpeg",
      desc: `A super tasty milkshake made with vanilla ice cream, milk, and Oreo cookies! This sweet treat is a hit with the whole family on a hot day!`,
    },
    {
      id: 7,
      title: "paneer tikka",
      category: "lunch",
      price: 260,
      img: "./images/paneertikka.jpg",
      desc: `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 150,
      img: "./images/item-8.jpeg",
      desc: `Our menu features burgers that are hand crafted with 100% Angus beef. Always fresh, never frozen. We use fresh, natural and delicious ingredients.  `,
    },
    {
      id: 9,
      title: "chai",
      category: "shakes",
      price: 20,
      img: "./images/chai.jpg",
      desc: `is a blend of black tea and spices such as cinnamon, cardamom, ginger, cloves and black peppercorns, which is typically served strong with milk.`,
    },
    {
      id: 10,
      title: "indian fantasy dinner",
      category: "dinner",
      price: 500,
      img: "./images/chavaldinner.jpg",
      desc: `In general, a thali begins with different types of breads such as puris or chapatis (rotis) and different vegetarian specialities (curries). However, in South India and Southeast Asia, rice is the only staple served with thalis.
      `,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    let filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
  
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
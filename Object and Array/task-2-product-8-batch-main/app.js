// Products html 

// Display products
function displayProduct(productList){
    productsHtml = productList.map(function(item) {
        return `<!-- single product -->
        <article class="product">
          <img
            src=${item.image}
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${item.title}</h5>
            <span class="product-price">$${item.price}</span>
          </footer>
        </article>`        
      })
       
  document.getElementById('products').innerHTML = productsHtml.join('')
}

// Display company names
function displayBrand(){
     // Companies
  let companies = products.reduce(function(p, c){
    console.log('p',p);
    
    if(p.includes(c.company) == false){
      p.push(c.company);
    }
    return p;
  },[]);
  
  companies.unshift("all")

  let chtml = companies.map((item)=>{
    return `<button class="company-btn" onclick="filterBrand('${item}')">${item}</button>`        
  })
 
  document.getElementById('companies').innerHTML =  chtml.join('')
}

// Filter products according to the brand/company
function filterBrand(brand){
    let filteredProducts = products.filter((items)=>{
        return items.company == brand || brand=="all";
    })
    
    displayProduct(filteredProducts)
    
}

// Ascending order
function sortdata(sortType){
   
        products.sort((a,b)=>{
            return a.price-b.price
        })
       
        
        if(sortType == 'asc'){
            displayProduct(products)
        } else if('dsc'){
            products.reverse();
            displayProduct(products)
        }
    
   
    
}
displayProduct(products)
displayBrand()
 
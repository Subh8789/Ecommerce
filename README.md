# Steps for run on local


## Step 1: 
git clone https://github.com/Subh8789/Ecommerce.git

## Step 2: 
cd Ecommerce

## Step 3: 
npm install

## Step 4: 
npm start

### Steps for updating the product listing data from JSON file follow the below path

## Step 1 (Go to below path):
src\utils\productJson.jsx

## Step 2 (Update the data according to the below format):
{
    "id": 1,
    "name": "OXTAIL (QUEUE BOEUF)",
    "description": "hi this is description",
    "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702912490_4738791.jpg?w=480&dpr=1.0",
    "price": "20000",
    "size": "xl",
    "rating": "5",
    "quantity": 1,
    "arrivalType": "New"
}

## Note:

You can add multiple data object to JSON file.
Product list will be visible on home page as per the data object count avail in json file.

## TODO:

- Product Showcase ( you can see it On home Page)
- Product Detail Page ( When you click on Details button, it  will be redirecting you to product detail page)
- Add to cart ( when ypu will clic on add to cart button, you will get a notification/alert that product has been added to cart). You can check the quantity of  cart product on cart icon of navbar.
- Shoping Cart (when you will click on cart icon of navbar , you can see the cart page where "added items list available", you acn adjust the item quantities and also remove items from the cart. You can see the total items , total cost as well as shipping charge over there.)
- Cart State persist ( When user reloads the app/page , item will be available on cart.)

## Used Tech

- React
- Redux
- Html
- Css
- Bootstrap
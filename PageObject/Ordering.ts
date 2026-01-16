import { expect, Locator, Page } from '@playwright/test';

    export class OrderingMain{
        readonly Viewcart: Locator;
        readonly AddToCart: Locator;
        readonly ContinueShopping: Locator;
        readonly AddToCartOutside: Locator;
        readonly Cart: Locator;
        readonly CheckOut: Locator;
        readonly CardNumber: Locator
        readonly Month: Locator
        readonly Date: Locator
        readonly Cvv: Locator
        readonly NameonCard: Locator
        readonly SelectCountry: Locator
        readonly Country: Locator
        readonly PlaceOrder: Locator
        readonly Download: Locator
        readonly OrdersModule: Locator
        readonly GoBackShop: Locator
        readonly Logout: Locator


        constructor (Order: Page){
this.Viewcart = Order.getByRole('button', { name: 'View' }).nth(2);         
this.AddToCart = Order.getByRole('button', { name: 'Add to Cart' }).first();
this.ContinueShopping = Order.locator('.continue', { hasText: 'Continue Shopping' });
this.AddToCartOutside = Order.getByRole('button', { name: 'Add to Cart' }).nth(1);
this.Cart = Order.locator('.btn.btn-custom', { hasText: 'Cart' });
this.CheckOut = Order.getByRole('button', { name: 'Checkout'});
this.CardNumber = Order.getByRole('textbox').first();
this.Month = Order.getByRole('combobox').nth(0);
this.Date = Order.getByRole('combobox').nth(1);
this.Cvv = Order.getByRole('textbox').nth(1);
this.NameonCard = Order.getByRole('textbox').nth(2);
this.SelectCountry = Order.getByRole('textbox', { name: 'Select Country' });
this.Country = Order.getByRole('button', { name: /Philippines/ });
this.PlaceOrder = Order.getByText('Place Order');
this.Download = Order.locator('.btn.btn-primary.mt-3.mb-3');
this.OrdersModule = Order.locator('.btn.btn-custom', { hasText: 'ORDERS' });
this.GoBackShop = Order.locator('.btn.btn-primary.col-md-2.offset-md-4', { hasText: 'Go Back to Shop' });
this.Logout = Order.locator('.btn.btn-custom', { hasText: 'Sign Out' });

        }
        async viewcart() {
            await expect(this.Viewcart).toBeEnabled({timeout: 1000});
            await this.Viewcart.click();
            
        }
        /*
        async addtocart() {
            await this.AddToCart.click();
    }
           */
        
        async addtocart() {
            await this.AddToCart.click();
            
        }
        async continueshopping() {
            await this.ContinueShopping.click();
            
        }
        async cartoutside() {
            await this.AddToCartOutside.click();
            
        }
        
        async cart() {
            await this.Cart.click();
            
        }
        async chckout() {
            await this.CheckOut.click();
            
        }       
        async cardnumber() {
            await this.CardNumber.fill('3542 2131 9292 4493');
            
        }
        async month() {
            await this.Month.selectOption('04');
        }
        async date() {
            await this.Date.selectOption('20');
        }
        async cvv() {
            await this.Cvv.fill('123');
        }
        async nameoncard() {
            await this.NameonCard.fill('Arno Nos');
        }
        async selectcountry() {
            await this.SelectCountry.type('ph', {delay: 3000});
        }
        async country() {
            await this.Country.click();
        }
         async placeorder() {
            await this.PlaceOrder.click();
        }
          async download() {
            await this.Download.click();
            console.log('Download Successfully');
        }
        async ordermodule() {
            await this.OrdersModule.click();
        }
        async gobackshop() {
            await this.GoBackShop.click();
        }
        async signout() {
            await expect(this.CardNumber).toBeEnabled();
            await this.Logout.click();
            console.log('successfully logged out')
        }



    }


    

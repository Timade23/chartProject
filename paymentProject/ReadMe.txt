1. in /squarecheckout/squarecheckout.component.ts, replace the locationId, appId, and authorization token
2. in /payfastcheckout/payfastcheckout.component.ts , replace the merchant_id and merchant_key
3. when testing the payfast modal, please use --ssl (i.e., 'ng serve --ssl' instead of 'ng serve')
4. in /cart/cart.component.html, use either 'app-payfastcheckout' or 'app-squarecheckout'

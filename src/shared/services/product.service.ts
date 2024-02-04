import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private data = [
    {
      "name": "Fall Limited Edition Sneakers",
      "id": "V59OF92YF627HFY0",
      "description": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      "price": 250.00,
      "markdown": 125.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Spring Kickin' Kicks",
      "id": "ENTOCR13RSCLZ6KU",
      "description": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
      "price": 350.00,
      "markdown": 200.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Aamir Solangi",
      "id": "IAKPO3R4761JDRVG",
      "description": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
      "price": 450.00,
      "markdown": 250.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Abla Dilmurat",
      "id": "5ZVOEPMJUI4MB4EN",
      "description": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
      "price": 150.00,
      "markdown": 70.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Adil Eli",
      "id": "6VTI8X6LL0MMPJCC",
      "description": "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
      "price": 90.00,
      "markdown": 60.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Adile Qadir",
      "id": "F2KEU5L7EHYSYFTT",
      "description": "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
      "price": 1000.00,
      "markdown": 550.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Abdukerim Ibrahim",
      "id": "LO6DVTZLRK68528I",
      "description": "Vivamus id faucibus velit, id posuere leo. Nunc aliquet sodales nunc a pulvinar. Nunc aliquet sodales nunc a pulvinar. Ut viverra quis eros eu tincidunt.",
      "price": 2300.00,
      "markdown": 1050.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Adil Abro",
      "id": "LJRIULRNJFCNZJAJ",
      "description": "Etiam malesuada blandit erat, nec ultricies leo maximus sed. Fusce congue aliquam elit ut luctus. Etiam malesuada blandit erat, nec ultricies leo maximus sed. Cras dictum dolor lacinia lectus vehicula rutrum. Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero.",
      "price": 500.00,
      "markdown": 123.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Afonso Vilarchán",
      "id": "JMCL0CXNXHPL1GBC",
      "description": "Fusce eu ultrices elit, vel posuere neque. Morbi ac tellus erat. Nunc tincidunt laoreet laoreet.",
      "price": 300.00,
      "markdown": 220.00,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Mark Schembri",
      "id": "KU4T500C830697CW",
      "description": "Nam laoreet, nunc non suscipit interdum, justo turpis vestibulum massa, non vulputate ex urna at purus. Morbi ultricies consequat ligula posuere eleifend. Vivamus id faucibus velit, id posuere leo. Sed laoreet posuere sapien, ut feugiat nibh gravida at. Ut maximus, libero nec facilisis fringilla, ex sem sollicitudin leo, non congue tortor ligula in eros.",
      "price": 6.1,
      "markdown": 123,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Antía Sixirei",
      "id": "XOF91ZR7MHV1TXRS",
      "description": "Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Phasellus massa ligula, hendrerit eget efficitur eget, tincidunt in ligula. Morbi finibus dui sed est fringilla ornare. Duis pellentesque ultrices convallis. Morbi ultricies consequat ligula posuere eleifend.",
      "price": 6.1,
      "markdown": 123,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
    {
      "name": "Aygul Mutellip",
      "id": "FTSNV411G5MKLPDT",
      "description": "Duis commodo orci ut dolor iaculis facilisis. Nam semper gravida nunc, sit amet elementum ipsum. Donec pellentesque ultrices mi, non consectetur eros luctus non. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna.",
      "price": 6.1,
      "markdown": 123,
      "ordering": "100",
      "quantity": 1,
      "inCart" : false
    },
  ]

  private products$ = new BehaviorSubject(this.data);
  products = this.products$.asObservable();
}

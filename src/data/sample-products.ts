import type { Product } from './product-categories'

// Complete product catalog based on Prima Venta catalog
export const allProducts: Product[] = [
  // MLEČNI PROIZVODI - Pavlake i Maslac
  { id: '1', name: 'Kisela Pavlaka 20%', description: 'Kantica 2 kg', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Pavlake i Maslac' },
  { id: '2', name: 'Neutralna Pavlaka Profesional', description: '1L (12/1#)', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Pavlake i Maslac' },
  { id: '3', name: 'Fine & Deli Whipping Creme 25%', description: '1L', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Pavlake i Maslac' },
  { id: '4', name: 'Hotelski Maslac Lurpak', description: '8 gr (120 kom/#)', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Pavlake i Maslac' },
  { id: '5', name: 'Biser Topljeni Sir', description: '140 gr (20 kom/#)', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Pavlake i Maslac' },

  // MLEČNI PROIZVODI - Meki Sirevi i Kajmak
  { id: '6', name: 'Burata Zanetti', description: '150 gr', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },
  { id: '7', name: 'Biser Vajkrem', description: '250 gr', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },
  { id: '8', name: 'Feta Sir', description: '800 gr limenka', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },
  { id: '9', name: 'Mozzarella Buffalo Sveža', description: '250 gr', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },
  { id: '10', name: 'Mozzarella', description: '125 gr', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },
  { id: '11', name: 'Zlatiborski Zreli Sir', description: '5 kg', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },
  { id: '12', name: 'Mladi Kajmak', description: '3 kg', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },
  { id: '13', name: 'Sjenički Kajmak Zreli', description: '3 kg', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Meki Sirevi i Kajmak' },

  // MLEČNI PROIZVODI - Polutvrdi i Tvrdi Sirevi
  { id: '14', name: 'Mozzarela Capone 35%', description: 'cca 1.4 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '15', name: 'Mozzarela Regina 49%', description: 'cca 1,5 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '16', name: 'Mozzarella Blok', description: '10 kg', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '17', name: 'Gran Spico 32%', description: 'cca 2 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '18', name: 'Rendani Parmezan Zanetti 32%', description: '1 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '19', name: 'Granelo Mix Ribani Sir u Konzervi 32%', description: '1kg', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '20', name: 'Granelo Mix Ribani', description: '1 kg kesa', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '21', name: 'Sir Cheddar u Komadu', description: 'cca 2 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '22', name: 'Chedar Listići', description: '1033 gr', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '23', name: 'Gauda Amerlander 48%', description: 'cca 3 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },
  { id: '24', name: 'Kačkavalj Biser 45%', description: 'cca 1,2 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Polutvrdi i Tvrdi Sirevi' },

  // MLEČNI PROIZVODI - Dimljeni Sirevi
  { id: '25', name: 'Dimljeni Sir Frico 45%', description: 'cca 2,7 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Dimljeni Sirevi' },

  // MLEČNI PROIZVODI - Plavi Sirevi
  { id: '26', name: 'Dor Blue Echen 50%', description: '100 gr (5 kom/pak)', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Plavi Sirevi' },
  { id: '27', name: 'Paladin Sir Plave Plesni 50%', description: '100 gr', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Plavi Sirevi' },
  { id: '28', name: 'Dor Blue Brot 50%', description: 'cca 3 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Plavi Sirevi' },
  { id: '29', name: 'Sir sa Plavom Plesni 50%', description: 'cca 2,6 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Plavi Sirevi' },
  { id: '30', name: 'Castello Danish Blue Gold Extra', description: '100 gr', unit: 'kom', category: 'mlecni-proizvodi', subcategory: 'Plavi Sirevi' },
  { id: '31', name: 'Castello Danish Blue', description: 'cca 1,9 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Plavi Sirevi' },

  // MLEČNI PROIZVODI - Biljni Sirevi
  { id: '32', name: 'Viotros', description: '2,5 kg', unit: 'kg', category: 'mlecni-proizvodi', subcategory: 'Biljni Sirevi' }
]

  // Continue with more products...
  
  // MESNATI I SUHOMESNATI PROIZVODI - Sunka
  { id: '33', name: 'Stisnjena Sunka u Komadu', description: 'cca 2kg', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Sunka' },
  { id: '34', name: 'Sunka Profesional Slajz', description: '', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Sunka' },
  { id: '35', name: 'Sunka Gold Slajz', description: '', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Sunka' },
  { id: '36', name: 'Pekarska Sunka Slajz', description: '', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Sunka' },

  // MESNATI I SUHOMESNATI PROIZVODI - Dimljena Pečenica i Slanina
  { id: '37', name: 'Gurme Svinjska Pečenica Slajz', description: '', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Dimljena Pečenica i Slanina' },
  { id: '38', name: 'Gurme Dimljena Extra Slanina Slajz', description: 'cca 500 gr', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Dimljena Pečenica i Slanina' },
  { id: '39', name: 'Gurme Ekstra Slanina Slajz', description: '', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Dimljena Pečenica i Slanina' },

  // MESNATI I SUHOMESNATI PROIZVODI - Kulen i Budimska
  { id: '40', name: 'Kulen Slajz Tacna', description: '1 kg', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Kulen i Budimska' },
  { id: '41', name: 'Budimska Slajz Tacna', description: '1 kg', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Kulen i Budimska' },

  // MESNATI I SUHOMESNATI PROIZVODI - Suvi Delikatesi (Part 1)
  { id: '42', name: 'Suvi Svinjski Vrat Komad', description: 'cca 1,2 kg VZ', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '43', name: 'Njegušći Vrat List', description: 'cca 400 gr', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '44', name: 'Suva Svinjska Pečenica VZ', description: 'cca 1.2kg', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '45', name: 'Njegušća Pečenica List', description: '400 gr', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '46', name: 'Mediteranski Pršut Delikates', description: '1/2 cm', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },

  // MESNATI I SUHOMESNATI PROIZVODI - Suvi Delikatesi (Part 2)
  { id: '47', name: 'Njegušći Pršut List Vakum', description: 'cca 400 gr', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '48', name: 'Lokavski Pršut 1/4 Dimljeni', description: 'cm', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '49', name: 'Njegušća Goveđa Pršut List', description: '', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '50', name: 'Njegušća Goveđa Pršut Komad', description: 'cca 1,5 kg', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },
  { id: '51', name: 'Njegušća Pančeta List', description: 'cca 500gr', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Suvi Delikatesi' },

  // MESNATI I SUHOMESNATI PROIZVODI - Sveže Meso
  { id: '52', name: 'T Boer Grudi sa Trbušinom BK Sveže', description: 'cca 9kg (1 kom/kut)', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Sveže Meso' },
  { id: '53', name: 'T Boer Plećka Cela Vakuum', description: 'cca 6kg (2 kom/kut)', unit: 'kg', category: 'mesnati-suhomesnati', subcategory: 'Sveže Meso' },
  { id: '54', name: 'Burger Junećí', description: '200 gr (25 kom/#)', unit: 'kom', category: 'mesnati-suhomesnati', subcategory: 'Sveže Meso' },
  { id: '55', name: 'Burger Junećí Zamrznuti', description: '150 gr (25 kom/1#)', unit: 'kom', category: 'mesnati-suhomesnati', subcategory: 'Sveže Meso' },

  // TESTENINE I PIRINAČ
  { id: '56', name: 'Barilla Penne Rigate', description: '500g (12/1#)', unit: 'kom', category: 'testenine-pirinac' },
  { id: '57', name: 'Barilla Fusili', description: '1 kg', unit: 'kom', category: 'testenine-pirinac' },
  { id: '58', name: 'Barilla Spageti No.5', description: '1 kg', unit: 'kom', category: 'testenine-pirinac' },
  { id: '59', name: 'Tagliatelle Granoro No 81', description: '500 gr', unit: 'kom', category: 'testenine-pirinac' },
  { id: '60', name: 'Spaghetti Restorante Granoro', description: '500 gr', unit: 'kom', category: 'testenine-pirinac' },
  { id: '61', name: 'Penne Rigate Granoro No 26', description: '500 gr', unit: 'kom', category: 'testenine-pirinac' },

  // OSTALE NAMIRNICE - Začini i Zrnasti Proizvodi
  { id: '62', name: 'Začin C', description: '1100 gr', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '63', name: 'So Tuzla', description: '5/1', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '64', name: 'Susam Seme (99,98% čistoća)', description: '1kg', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '65', name: 'Prezla Panko - Hlebne Mrvice', description: '1 kg', unit: 'kg', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '66', name: 'Prezla', description: '4 kg', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '67', name: 'Origano SP', description: '500gr (10/1#)', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '68', name: 'Biber Crni Zrno', description: '500gr (16/1#)', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '69', name: 'Suvi Vrganj', description: '500 gr (2,5 kg/1#)', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '70', name: 'Paprika Tucana Ljuta', description: '1kg (8/#)', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '71', name: 'Paprika Slatka Crvena Mlevena', description: '1kg (8/#)', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
]

  // OSTALE NAMIRNICE - Sosevi Suvi (Moguntia)
  { id: '72', name: 'Demi Glace', description: '2kg/1 kom', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '73', name: 'Hollandese Sos, Granule', description: '2 kg/1 kom', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '74', name: 'Cuisinor Vrganj Krem Supa', description: '3 kg/1 kom', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '75', name: 'Sos za Juneće Pečenje', description: '2 kg (granule)', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '76', name: 'Baza za Goveđu Supu Moguntia', description: '1 kg', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '77', name: 'Biber Krem Sos', description: '1kg/1 kom', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '78', name: 'Baza za Pileću Supu Moguntia', description: '1 kg', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '79', name: 'Bundeva Krem Supa', description: '3 kg', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },
  { id: '80', name: 'Krompir Pire Dehidrirani', description: '6,75 kg/1 kom', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Sosevi Suvi' },

  // OSTALE NAMIRNICE - Začini (Moguntia specialni)
  { id: '81', name: 'Beli Luk u Granulama Moguntia', description: '600 gr', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '82', name: 'Biber Mix Moguntia', description: '400 gr', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '83', name: 'Fisch - Začinska Smesa za Sve Vrste Ribe', description: '180 g', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '84', name: 'Feine Wurze - Univerzalni Začin za Supe i Soseve', description: '180 g', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '85', name: 'Brat Grill & Steak - Začinska za Roštilj', description: '150 g', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '86', name: 'Barbecue - Začinska za Roštilj', description: '150 g', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },
  { id: '87', name: 'Origano Moguntia 100%', description: '110 g', unit: 'kom', category: 'ostale-namirnice', subcategory: 'Začini i Zrnasti Proizvodi' },

  // PROIZVODI OD BRAŠNA - Hleb i Tortilje
  { id: '88', name: 'Hleb Tost Classic Veliki', description: '750 gr', unit: 'kom', category: 'proizvodi-brasna', subcategory: 'Hleb i Tortilje' },
  { id: '89', name: 'Hleb Tost Classic', description: '500 gr', unit: 'kom', category: 'proizvodi-brasna', subcategory: 'Hleb i Tortilje' },
  { id: '90', name: 'Tortilja', description: '30 cm 12/1', unit: 'kom', category: 'proizvodi-brasna', subcategory: 'Hleb i Tortilje' },
  { id: '91', name: 'Brašno 00 Pizza Special', description: '10/1', unit: 'kom', category: 'proizvodi-brasna', subcategory: 'Hleb i Tortilje' },
  { id: '92', name: 'Baguette Rustique', description: '220 gr (30/#)', unit: 'kom', category: 'proizvodi-brasna', subcategory: 'Hleb i Tortilje' },

  // PROIZVODI OD BRAŠNA - Pirinač
  { id: '93', name: 'Riso Scotti Arborio Rice', description: '5 x 1 kg', unit: 'kg', category: 'proizvodi-brasna', subcategory: 'Pirinač' },

  // ULJA I SIRĆE - Ulja
  { id: '94', name: 'Palmino Ulje', description: '20L', unit: 'kom', category: 'ulja-sirce', subcategory: 'Ulja' },
  { id: '95', name: 'Suncokretovo Ulje', description: '1L (15/1#)', unit: 'kom', category: 'ulja-sirce', subcategory: 'Ulja' },
  { id: '96', name: 'Maslinovo Ulje Ekstra Devičansko - Isle of Cyprus', description: '1 L', unit: 'kom', category: 'ulja-sirce', subcategory: 'Ulja' },
  { id: '97', name: 'Maslinovo Ulje Komine', description: 'pet 1L (12/1#)', unit: 'kom', category: 'ulja-sirce', subcategory: 'Ulja' },

  // ULJA I SIRĆE - Sirće i Kreme
  { id: '98', name: 'Aceto Balzamico', description: '2 L', unit: 'kom', category: 'ulja-sirce', subcategory: 'Sirće i Kreme' },
  { id: '99', name: 'Alkoholno Sirće', description: '1/1', unit: 'kom', category: 'ulja-sirce', subcategory: 'Sirće i Kreme' },
  { id: '100', name: 'Sirće Vinsko', description: '1 L', unit: 'kom', category: 'ulja-sirce', subcategory: 'Sirće i Kreme' },
  { id: '101', name: 'Aceto Krema Athena', description: '500gr', unit: 'kom', category: 'ulja-sirce', subcategory: 'Sirće i Kreme' },

  // KONZERVIRANI PROIZVODI - Maslina i Povrće
  { id: '102', name: 'Maslina Zelena BK', description: '3/1 (neto plod)', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Maslina i Povrće' },
  { id: '103', name: 'Maslina Crna B/K', description: '2/1 (neto plod)', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Maslina i Povrće' },
  { id: '104', name: 'Maslina Zelena Rezana', description: '3kg (neto plod)', unit: 'kg', category: 'konzervirani-proizvodi', subcategory: 'Maslina i Povrće' },
  { id: '105', name: 'Limenka Krastavac', description: '5/1', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Maslina i Povrće' },
  { id: '106', name: 'Kapar u Vinskom Sirćetu', description: '1 kg', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Maslina i Povrće' },
  { id: '107', name: 'Jalapeno Paprika Rezana', description: '3100 ml (6/1#)', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Maslina i Povrće' },

  // KONZERVIRANI PROIZVODI - Ostali Konzervirani Proizvodi
  { id: '108', name: 'Tunjevina Komadi MC Queens', description: '160 gr', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '109', name: 'Kukuruz Šećerac', description: '425 ml konzerva', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '110', name: 'Kukuruz Klipčići', description: '400 gr/230 gr (12/1)', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '111', name: 'Pasulj Crveni Konzerva', description: '400 gr', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '112', name: 'Lebleblija Helcom', description: '2.5 kg / 1.5 kg', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '113', name: 'Livadski Med Mešavina', description: '900 gr', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '114', name: 'Kikiriki Puter', description: '1 kg', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '115', name: 'Tahini Pasta', description: '1 kg', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },
  { id: '116', name: 'Ajvar Starinski Blagi', description: '580 ml (pečena paprika)', unit: 'kom', category: 'konzervirani-proizvodi', subcategory: 'Ostali Konzervirani Proizvodi' },

  // SOSEVI - Pesto i BBQ
  { id: '117', name: 'Pesto alla Genoveze', description: '1 kg', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },
  { id: '118', name: 'BBQ Sos', description: '2,2 kg', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },
  { id: '119', name: 'Arum Burger Sos', description: '2/1', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },
  { id: '120', name: 'Arum Tartar Sos', description: '2/1', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },
  { id: '121', name: 'Arum Chili Sos', description: '3,3 kg', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },
  { id: '122', name: 'Arum Sweet Chili Sos', description: '3,8 kg', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },
  { id: '123', name: 'Arum Soja Sos', description: '3,7 kg', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },
  { id: '124', name: 'Cheddar Cheese Dip', description: '1/1 - topljeni chedara', unit: 'kom', category: 'sosevi', subcategory: 'Pesto i BBQ' },

  // SOSEVI - Majonez i Senf
  { id: '125', name: 'Majonez Gastro Kulinar Dijamant', description: '5 L', unit: 'kom', category: 'sosevi', subcategory: 'Majonez i Senf' },
  { id: '126', name: 'Arum Majonez Delikates', description: '3/1', unit: 'kom', category: 'sosevi', subcategory: 'Majonez i Senf' },
  { id: '127', name: 'Senf Delikates Gurman', description: '2/1', unit: 'kom', category: 'sosevi', subcategory: 'Majonez i Senf' },
  { id: '128', name: 'Arum Majonez Posni', description: '3/1', unit: 'kom', category: 'sosevi', subcategory: 'Majonez i Senf' },

  // SOSEVI - Pelat i Proizvodi od Paradajza
  { id: '129', name: 'Arum Paradajz Pelat', description: '2500g', unit: 'kom', category: 'sosevi', subcategory: 'Pelat i Proizvodi od Paradajza' },
  { id: '130', name: 'Pomodoro Pelati Ciao', description: '2,5 kg', unit: 'kom', category: 'sosevi', subcategory: 'Pelat i Proizvodi od Paradajza' },
  { id: '131', name: 'Pizza Sos', description: '4100 gr', unit: 'kom', category: 'sosevi', subcategory: 'Pelat i Proizvodi od Paradajza' },
  { id: '132', name: 'Kečap Profesional', description: '5kg', unit: 'kom', category: 'sosevi', subcategory: 'Pelat i Proizvodi od Paradajza' },
  { id: '133', name: 'Paradajz Sušeni na Suncu Helcom', description: '1600 ml', unit: 'kom', category: 'sosevi', subcategory: 'Pelat i Proizvodi od Paradajza' },
  { id: '134', name: 'Paradajz Pire', description: '6 kg', unit: 'kom', category: 'sosevi', subcategory: 'Pelat i Proizvodi od Paradajza' },

  // SLATKI PROGRAM - Kremovi
  { id: '135', name: 'Nutella', description: '750g (6/1#)', unit: 'kom', category: 'slatki-program', subcategory: 'Kremovi' },
  { id: '136', name: 'Eurokrom Takovo', description: '2.5kg (6/1#)', unit: 'kom', category: 'slatki-program', subcategory: 'Kremovi' },
  { id: '137', name: 'Krem 6/1 Kremko Mešani', description: '', unit: 'kom', category: 'slatki-program', subcategory: 'Kremovi' },

  // SLATKI PROGRAM - Čokolade
  { id: '138', name: 'Senna Crna Čokolada Disk', description: '10 kg (kakao 19%, 11% kakao puter)', unit: 'kg', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '139', name: 'Nuppy Piu - Lesnik Krem 13%', description: '6 kg', unit: 'kg', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '140', name: 'Nuppy Bianco Ciok - Bela Čokolada', description: '6 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '141', name: 'Nuppy Nocciola Bianco - Mlečni Lesnik Krem Bueno', description: '6 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '142', name: 'Pistachio Kream - 20% Pistaći', description: '3 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '143', name: 'Pistachio Cream - 15% Pistaći', description: '6 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '144', name: 'Crunch Hazelnut Cream PMF', description: '5kg sa komadicima lesnika', unit: 'kom', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '145', name: 'Hazelnut Milky Praline', description: '5 kg beli mlečni lesnik krem', unit: 'kom', category: 'slatki-program', subcategory: 'Čokolade' },
  { id: '146', name: 'Caramelized Biscuit Cream', description: '5 kg - karamel biskvit/cimet', unit: 'kom', category: 'slatki-program', subcategory: 'Čokolade' },

  // SLATKI PROGRAM - Kandirano Voće
  { id: '147', name: 'Maraschino Stem - Zelena Kandirana Trešnja', description: '1,2 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Kandirano Voće' },
  { id: '148', name: 'Maraschino Stem - Žuta Kandirana Trešnja', description: '1,2 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Kandirano Voće' },
  { id: '149', name: 'Maraschino Stem - Kandirana Trešnja sa Peteljkom', description: '1,2 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Kandirano Voće' },
  { id: '150', name: 'Višnja Nadev', description: '6 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Kandirano Voće' },
  { id: '151', name: 'Boom Mleveni Keks', description: '2kg', unit: 'kom', category: 'slatki-program', subcategory: 'Kandirano Voće' },
  { id: '152', name: 'Bevita Keks Mleveni', description: '2kg', unit: 'kom', category: 'slatki-program', subcategory: 'Kandirano Voće' },
  { id: '153', name: 'Kadaif Pečeni', description: '10kg', unit: 'kom', category: 'slatki-program', subcategory: 'Kandirano Voće' },
  { id: '154', name: 'FO Powder Whipped Cream - Slag Visokog Kvaliteta', description: '1 kg', unit: 'kg', category: 'slatki-program', subcategory: 'Kandirano Voće' },

  // SLATKI PROGRAM - Apetisani i Orasasti
  { id: '171', name: 'Badem Listići', description: '500 gr', unit: 'kom', category: 'slatki-program', subcategory: 'Apetisani i Orasasti' },
  { id: '172', name: 'Lesnik Nepečeni', description: '1 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Apetisani i Orasasti' },
  { id: '173', name: 'Badem Pečeni', description: '1 kg', unit: 'kom', category: 'slatki-program', subcategory: 'Apetisani i Orasasti' },

  // OSTALO
  { id: '174', name: 'Aluminijumska Folija', description: '300mm, 1kg', unit: 'kom', category: 'ostalo' },
  { id: '175', name: 'Patroni za Slag', description: '24/1', unit: 'kom', category: 'ostalo' }
]

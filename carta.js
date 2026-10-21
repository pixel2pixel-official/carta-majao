/* =====================================================================
   CARTA DE MAJAO BARRA — DATOS
   Para cambiar un plato o un precio, edita solo este archivo.

   Cada texto puede ser:
     - una cadena simple ("Gin Mare"), igual en todos los idiomas, o
     - un objeto { es, en, fr, de } con cada traducción.

   Precios de cada producto (usa solo uno de estos campos):
     precio: 6.5                     → precio único
     precio: 3, ud: true             → precio por unidad ("/ud")
     media: 4.5, racion: 6.5         → media ración y ración
     formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 16 }]
                                     → varios formatos (claves en FORMATOS)
     variantes: [{ n: {...}, p: 3 }] → variedades del mismo plato (croquetas)
   Otros campos opcionales:
     d: descripción · sup: suplementos [{ n, p }] · tags: ['compartir', 'guarnicion']
   ===================================================================== */

window.CARTA = {

  info: {
    direccion: 'Av. Alfonso el Sabio, 7 · 03002 Alicante',
    telefono: '+34 620 81 31 51',
    horario: {
      es: 'Cocina ininterrumpida de 12:00 a 00:00',
      en: 'Kitchen open non-stop, 12:00 to midnight',
      fr: 'Cuisine en continu de 12h00 à minuit',
      de: 'Durchgehend warme Küche von 12:00 bis 24:00 Uhr'
    },
    instagram: 'https://www.instagram.com/majaoalicante/',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Majao+Barra+Av.+Alfonso+el+Sabio+7+Alicante',
    resenas: '' // Pega aquí el enlace "Escribir una reseña" de Google para mostrar el botón
  },

  tabs: [

    /* ============================ COMIDA ============================ */
    {
      id: 'comida',
      t: { es: 'Comida', en: 'Food', fr: 'Cuisine', de: 'Speisen' },
      secciones: [
        {
          id: 'sugerencias',
          t: { es: 'Sugerencias', en: 'Chef’s suggestions', fr: 'Suggestions', de: 'Empfehlungen' },
          destacada: true,
          items: [
            {
              n: { es: 'Ostras francesas Peter Pan (3 uds.)', en: 'Peter Pan French oysters (3 pcs.)', fr: 'Huîtres françaises Peter Pan (3 pièces)', de: 'Französische Austern Peter Pan (3 Stück)' },
              d: { es: 'Con aliño de manzana Granny Smith o de chalota', en: 'With Granny Smith apple or shallot dressing', fr: 'Assaisonnement pomme Granny Smith ou échalote', de: 'Mit Dressing aus Granny-Smith-Apfel oder Schalotte' },
              precio: 11
            }
          ]
        },
        {
          id: 'entrantes',
          t: { es: 'Entrantes', en: 'Starters', fr: 'Entrées', de: 'Vorspeisen' },
          items: [
            {
              n: 'Torrezno de Soria',
              d: { es: 'Con emulsión de ajo asado', en: 'Crispy pork belly with roasted garlic emulsion', fr: 'Poitrine de porc croustillante, émulsion d’ail rôti', de: 'Knuspriger Schweinebauch mit Emulsion aus geröstetem Knoblauch' },
              precio: 6, ud: true
            },
            {
              n: 'Gilda',
              d: { es: 'La clásica: anchoa, piparra y aceituna', en: 'The classic: anchovy, piparra pepper and olive', fr: 'La classique : anchois, piment piparra et olive', de: 'Der Klassiker: Sardelle, Piparra-Pfefferschote und Olive' },
              precio: 3
            },
            {
              n: { es: 'Marinera con anchoa del Cantábrico', en: 'Marinera with Cantabrian anchovy', fr: 'Marinera à l’anchois de Cantabrie', de: 'Marinera mit kantabrischer Sardelle' },
              precio: 4
            },
            {
              n: { es: 'Brioche con anchoa del Cantábrico', en: 'Brioche with Cantabrian anchovy', fr: 'Brioche à l’anchois de Cantabrie', de: 'Brioche mit kantabrischer Sardelle' },
              d: { es: 'Mantequilla, nuez y lima', en: 'Butter, walnut and lime', fr: 'Beurre, noix et citron vert', de: 'Butter, Walnuss und Limette' },
              precio: 4
            },
            {
              n: { es: 'Ensaladilla de La Pepi', en: 'La Pepi’s Russian salad', fr: 'Salade russe de La Pepi', de: 'Russischer Salat nach La Pepi' },
              media: 4.5, racion: 6.5
            },
            {
              n: { es: 'Papas arrugadas', en: 'Canarian wrinkled potatoes', fr: 'Pommes de terre ridées canariennes', de: 'Kanarische Runzelkartoffeln' },
              d: { es: 'Con sus mojos', en: 'With mojo sauces', fr: 'Avec leurs sauces mojo', de: 'Mit Mojo-Soßen' },
              media: 3.5, racion: 5.2
            },
            {
              n: { es: 'Salpicón de marisco', en: 'Seafood salpicón', fr: 'Salpicón de fruits de mer', de: 'Meeresfrüchte-Salpicón' },
              media: 4.9, racion: 7.5
            },
            {
              n: { es: 'Tabla de quesos de Mutxamel', en: 'Mutxamel cheese board', fr: 'Plateau de fromages de Mutxamel', de: 'Käseplatte aus Mutxamel' },
              d: { es: '4 quesos de cabra de la Quesería El de Sereix', en: '4 goat’s cheeses from Quesería El de Sereix', fr: '4 fromages de chèvre de la fromagerie El de Sereix', de: '4 Ziegenkäse der Käserei El de Sereix' },
              media: 12.5, racion: 19
            },
            {
              n: { es: 'Escalivada con coca de aceite', en: 'Escalivada on olive-oil coca bread', fr: 'Escalivada sur coca à l’huile d’olive', de: 'Escalivada auf Olivenöl-Coca' },
              d: { es: '', en: 'Roasted vegetables on crispy flatbread', fr: 'Légumes rôtis sur pain plat croustillant', de: 'Geröstetes Gemüse auf knusprigem Fladenbrot' },
              precio: 6,
              sup: [
                { n: { es: 'Mojama', en: 'Cured tuna (mojama)', fr: 'Thon séché (mojama)', de: 'Luftgetrockneter Thunfisch (Mojama)' }, p: 2.5 },
                { n: { es: 'Bonito', en: 'Bonito tuna', fr: 'Bonite', de: 'Bonito' }, p: 2.5 },
                { n: { es: 'Hueva de atún', en: 'Tuna roe', fr: 'Œufs de thon', de: 'Thunfischrogen' }, p: 3 }
              ]
            },
            {
              n: { es: 'Croquetas caseras', en: 'Homemade croquettes', fr: 'Croquettes maison', de: 'Hausgemachte Kroketten' },
              variantes: [
                { n: { es: 'Jamón', en: 'Ham', fr: 'Jambon', de: 'Schinken' }, p: 3 },
                { n: { es: 'Boletus', en: 'Porcini mushroom', fr: 'Cèpes', de: 'Steinpilz' }, p: 3 },
                { n: { es: 'Chuleta', en: 'Beef chop', fr: 'Côte de bœuf', de: 'Rinderkotelett' }, p: 3 },
                { n: { es: 'Gamba roja', en: 'Red prawn', fr: 'Crevette rouge', de: 'Rote Garnele' }, p: 3.5 }
              ]
            },
            {
              n: { es: 'Zamburiñas a la plancha', en: 'Grilled queen scallops', fr: 'Pétoncles grillés', de: 'Gegrillte Kammmuscheln' },
              precio: 3.5, ud: true
            },
            {
              n: { es: 'Pimientos del piquillo rellenos', en: 'Stuffed piquillo peppers', fr: 'Poivrons piquillo farcis', de: 'Gefüllte Piquillo-Paprika' },
              d: { es: 'Rellenos de blanc i negre', en: 'Filled with blanc i negre sausage', fr: 'Farcis de blanc i negre (saucisse catalane)', de: 'Gefüllt mit Blanc-i-Negre-Wurst' },
              precio: 3.5, ud: true
            },
            {
              n: { es: 'Flor de alcachofa a la plancha', en: 'Grilled artichoke flower', fr: 'Fleur d’artichaut grillée', de: 'Gegrillte Artischockenblüte' },
              d: { es: 'Con mousse de queso ahumado y virutas de jamón', en: 'With smoked cheese mousse and ham shavings', fr: 'Mousse de fromage fumé et copeaux de jambon', de: 'Mit Räucherkäse-Mousse und Schinkenspänen' },
              precio: 5
            },
            {
              n: { es: 'Cazón en adobo', en: 'Marinated fried dogfish', fr: 'Émissole marinée et frite', de: 'Marinierter frittierter Hundshai' },
              d: { es: 'Con mayonesa de cítricos', en: 'With citrus mayonnaise', fr: 'Mayonnaise aux agrumes', de: 'Mit Zitrus-Mayonnaise' },
              precio: 12
            },
            {
              n: { es: 'Calamares a la andaluza', en: 'Andalusian-style fried squid', fr: 'Calamars frits à l’andalouse', de: 'Frittierte Calamares nach andalusischer Art' },
              precio: 22
            },
            {
              n: { es: 'Carpaccio de chuleta', en: 'Beef chop carpaccio', fr: 'Carpaccio de côte de bœuf', de: 'Rinderkotelett-Carpaccio' },
              d: { es: 'Con espuma de Idiazábal', en: 'With Idiazábal cheese foam', fr: 'Espuma de fromage Idiazábal', de: 'Mit Idiazábal-Käseschaum' },
              precio: 18
            },
            {
              n: { es: 'Steak tartar tradicional', en: 'Traditional steak tartare', fr: 'Steak tartare traditionnel', de: 'Klassisches Steak Tatar' },
              precio: 18.5
            },
            {
              n: { es: 'Servicio de pan', en: 'Bread service', fr: 'Service de pain', de: 'Brot' },
              d: { es: 'Con AOVE «Castell de la Costurera» de la montaña de Alicante', en: 'With “Castell de la Costurera” extra virgin olive oil from the Alicante mountains', fr: 'Avec l’huile d’olive vierge extra « Castell de la Costurera » de la montagne d’Alicante', de: 'Mit nativem Olivenöl extra „Castell de la Costurera“ aus den Bergen Alicantes' },
              precio: 5.5
            }
          ]
        },
        {
          id: 'ensaladas',
          t: { es: 'Ensaladas', en: 'Salads', fr: 'Salades', de: 'Salate' },
          items: [
            {
              n: { es: 'Burrata con carpaccio de calabacín', en: 'Burrata with courgette carpaccio', fr: 'Burrata et carpaccio de courgette', de: 'Burrata mit Zucchini-Carpaccio' },
              d: { es: 'Y tartar de tomate', en: 'And tomato tartare', fr: 'Et tartare de tomate', de: 'Und Tomatentatar' },
              precio: 14.5
            },
            {
              n: { es: 'Aguacate asado con gambas', en: 'Roasted avocado with prawns', fr: 'Avocat rôti aux crevettes', de: 'Geröstete Avocado mit Garnelen' },
              d: { es: 'Salsa de yogur y pico de gallo', en: 'Yoghurt sauce and pico de gallo', fr: 'Sauce yaourt et pico de gallo', de: 'Joghurtsoße und Pico de Gallo' },
              precio: 16
            },
            {
              n: { es: 'Tomate Raff con capellán, pulpo seco y ventresca', en: 'Raff tomato with capellán, dried octopus and tuna belly', fr: 'Tomate Raff, capellán, poulpe séché et ventrèche de thon', de: 'Raff-Tomate mit Capellán, getrocknetem Oktopus und Thunfischbauch' },
              d: { es: 'Con cebolleta tierna y tirabeques', en: 'With spring onion and mangetout', fr: 'Cébette et pois gourmands', de: 'Mit Frühlingszwiebel und Zuckerschoten' },
              precio: 18
            }
          ]
        },
        {
          id: 'huevos',
          t: { es: 'Huevos rotos', en: 'Huevos rotos', fr: 'Huevos rotos', de: 'Huevos rotos' },
          nota: { es: '', en: 'Fried eggs over chips', fr: 'Œufs frits sur frites', de: 'Spiegeleier auf Pommes frites' },
          items: [
            {
              n: { es: 'Mar y montaña', en: 'Surf & turf', fr: 'Terre et mer', de: 'Land und Meer' },
              d: { es: 'Con chistorra y calamar', en: 'With chistorra sausage and squid', fr: 'Chistorra et calamar', de: 'Mit Chistorra-Wurst und Tintenfisch' },
              precio: 18
            },
            {
              n: { es: 'Virutas de jamón ibérico', en: 'Iberian ham shavings', fr: 'Copeaux de jambon ibérique', de: 'Iberischer Schinken' },
              d: { es: 'Con pimientos del Padrón', en: 'With Padrón peppers', fr: 'Avec piments de Padrón', de: 'Mit Padrón-Paprika' },
              precio: 17
            },
            {
              n: { es: 'Setas', en: 'Wild mushrooms', fr: 'Champignons', de: 'Pilze' },
              d: { es: 'Con trufa', en: 'With truffle', fr: 'À la truffe', de: 'Mit Trüffel' },
              precio: 19
            }
          ]
        },
        {
          id: 'carnes',
          t: { es: 'Carnes', en: 'Meat', fr: 'Viandes', de: 'Fleisch' },
          items: [
            {
              n: { es: 'Carrilleras', en: 'Braised cheeks', fr: 'Joues braisées', de: 'Geschmorte Bäckchen' },
              d: { es: 'Con parmentier de patata', en: 'With potato parmentier', fr: 'Parmentier de pommes de terre', de: 'Mit Kartoffelpüree' },
              precio: 16
            },
            {
              n: { es: 'Pluma ibérica a la parrilla', en: 'Grilled Iberian pork pluma', fr: 'Pluma de porc ibérique grillée', de: 'Gegrillte Pluma vom iberischen Schwein' },
              precio: 24, tags: ['guarnicion']
            },
            {
              n: { es: 'Entrecot madurado a la parrilla', en: 'Grilled dry-aged entrecôte', fr: 'Entrecôte maturée grillée', de: 'Gegrilltes gereiftes Entrecôte' },
              precio: 32, tags: ['guarnicion']
            }
          ]
        },
        {
          id: 'pescados',
          t: { es: 'Pescados', en: 'Fish', fr: 'Poissons', de: 'Fisch' },
          items: [
            {
              n: { es: 'Pescado de lonja al grill', en: 'Grilled market fish', fr: 'Poisson de la criée grillé', de: 'Gegrillter Fisch vom Markt' },
              precio: 26, tags: ['guarnicion']
            },
            {
              n: { es: 'Bacalao gratinado con alioli de sobrasada', en: 'Cod gratin with sobrasada aioli', fr: 'Cabillaud gratiné à l’aïoli de sobrasada', de: 'Überbackener Kabeljau mit Sobrasada-Aioli' },
              precio: 23.5, tags: ['guarnicion']
            },
            {
              n: { es: 'Pata de pulpo', en: 'Octopus leg', fr: 'Tentacule de poulpe', de: 'Oktopusarm' },
              d: { es: 'Con parmentier y tirabeques', en: 'With potato parmentier and mangetout', fr: 'Parmentier et pois gourmands', de: 'Mit Kartoffelpüree und Zuckerschoten' },
              precio: 28, tags: ['compartir']
            }
          ]
        },
        {
          id: 'arroces',
          t: { es: 'Arroces melosos', en: 'Creamy rice dishes', fr: 'Riz crémeux', de: 'Cremige Reisgerichte' },
          nota: { es: 'Para compartir', en: 'To share', fr: 'À partager', de: 'Zum Teilen' },
          items: [
            {
              n: { es: 'Arroz del senyoret', en: 'Arroz del senyoret', fr: 'Arroz del senyoret', de: 'Arroz del senyoret' },
              d: { es: '', en: 'Seafood rice, all peeled', fr: 'Riz aux fruits de mer décortiqués', de: 'Reis mit geschälten Meeresfrüchten' },
              precio: 32
            },
            {
              n: { es: 'Arroz de pluma ibérica', en: 'Iberian pork pluma rice', fr: 'Riz à la pluma ibérique', de: 'Reis mit iberischer Pluma' },
              precio: 30
            }
          ]
        },
        {
          id: 'montaditos',
          t: { es: 'Montaditos', en: 'Montaditos', fr: 'Montaditos', de: 'Montaditos' },
          nota: { es: 'Solo en el servicio de cenas', en: 'Mini sandwiches · dinner service only', fr: 'Petits sandwichs · uniquement au dîner', de: 'Kleine belegte Brote · nur zum Abendessen' },
          items: [
            {
              n: { es: 'Sobrasada y huevo de codorniz', en: 'Sobrasada and quail egg', fr: 'Sobrasada et œuf de caille', de: 'Sobrasada mit Wachtelei' },
              precio: 5
            },
            {
              n: { es: 'Salmón con queso brie', en: 'Salmon and brie', fr: 'Saumon et brie', de: 'Lachs mit Brie' },
              precio: 6
            },
            {
              n: { es: 'Calamares con mayonesa de lima', en: 'Squid with lime mayonnaise', fr: 'Calamars, mayonnaise au citron vert', de: 'Tintenfisch mit Limettenmayonnaise' },
              precio: 8
            },
            {
              n: { es: 'Solomillo con mantequilla', en: 'Sirloin with butter', fr: 'Filet au beurre', de: 'Filet mit Butter' },
              precio: 10
            }
          ]
        },
        {
          id: 'guarniciones',
          t: { es: 'Guarniciones', en: 'Sides', fr: 'Accompagnements', de: 'Beilagen' },
          items: [
            { n: { es: 'Boniato con eneldo, miel y mostaza', en: 'Sweet potato with dill, honey and mustard', fr: 'Patate douce, aneth, miel et moutarde', de: 'Süßkartoffel mit Dill, Honig und Senf' }, precio: 4.5 },
            { n: { es: 'Patatas fritas', en: 'French fries', fr: 'Frites', de: 'Pommes frites' }, precio: 4.5 },
            { n: { es: 'Verduras al wok', en: 'Wok-fried vegetables', fr: 'Légumes sautés au wok', de: 'Wok-Gemüse' }, precio: 4.5 },
            { n: { es: 'Espinacas con piñones y pasas', en: 'Spinach with pine nuts and raisins', fr: 'Épinards, pignons et raisins secs', de: 'Spinat mit Pinienkernen und Rosinen' }, precio: 4.5 }
          ]
        }
      ]
    },

    /* ============================ POSTRES ============================ */
    {
      id: 'postres',
      t: { es: 'Postres', en: 'Desserts', fr: 'Desserts', de: 'Desserts' },
      secciones: [
        {
          id: 'dulces',
          t: { es: 'Postres', en: 'Desserts', fr: 'Desserts', de: 'Desserts' },
          items: [
            {
              n: { es: 'Tarta de queso Majao', en: 'Majao cheesecake', fr: 'Cheesecake Majao', de: 'Majao-Käsekuchen' },
              precio: 6.5
            },
            {
              n: { es: 'Torrija de brioche', en: 'Brioche torrija', fr: 'Torrija de brioche', de: 'Brioche-Torrija' },
              d: { es: 'Con helado de mango', en: 'Spanish-style French toast with mango ice cream', fr: 'Pain perdu à l’espagnole, glace à la mangue', de: 'Spanischer Arme Ritter mit Mangoeis' },
              precio: 6.5
            },
            {
              n: { es: 'Brownie de chocolate negro 70 % con nueces tostadas', en: '70% dark chocolate brownie with toasted walnuts', fr: 'Brownie chocolat noir 70 % aux noix grillées', de: 'Brownie aus 70 % Zartbitterschokolade mit gerösteten Walnüssen' },
              d: { es: 'Con helado de mantecado alicantino', en: 'With Alicante-style mantecado ice cream', fr: 'Glace mantecado d’Alicante', de: 'Mit Mantecado-Eis nach Alicante-Art' },
              precio: 6.5
            },
            {
              n: { es: 'Tarta de manzana', en: 'Apple tart', fr: 'Tarte aux pommes', de: 'Apfelkuchen' },
              d: { es: 'Con crumble', en: 'With crumble', fr: 'Façon crumble', de: 'Mit Streuseln' },
              precio: 6.5
            },
            {
              n: { es: 'Milhojas de crema', en: 'Cream mille-feuille', fr: 'Mille-feuille à la crème', de: 'Cremeschnitte' },
              d: { es: 'Con helado de turrón de Xixona', en: 'With Xixona turrón ice cream', fr: 'Glace au touron de Xixona', de: 'Mit Xixona-Turrón-Eis' },
              precio: 7
            }
          ]
        },
        {
          id: 'vinos-dulces',
          t: { es: 'Vinos dulces', en: 'Dessert wines', fr: 'Vins doux', de: 'Dessertweine' },
          items: [
            { n: 'Mistela', formatos: [{ f: 'copa', p: 3.5 }] }
          ]
        }
      ]
    },

    /* ============================ BEBIDAS ============================ */
    {
      id: 'bebidas',
      t: { es: 'Bebidas', en: 'Drinks', fr: 'Boissons', de: 'Getränke' },
      secciones: [
        {
          id: 'spritz',
          t: 'Spritz',
          items: [
            { n: 'Aperol Spritz', precio: 9 },
            { n: 'Campari Spritz', precio: 9 },
            { n: { es: 'Vermut Spritz', en: 'Vermouth Spritz', fr: 'Spritz au vermouth', de: 'Wermut-Spritz' }, precio: 8 },
            { n: { es: 'Spritz 0,0', en: 'Spritz 0.0 (alcohol-free)', fr: 'Spritz 0,0 (sans alcool)', de: 'Spritz 0,0 (alkoholfrei)' }, precio: 8 }
          ]
        },
        {
          id: 'vermut',
          t: { es: 'Vermut y aperitivos', en: 'Vermouth & aperitifs', fr: 'Vermouths et apéritifs', de: 'Wermut & Aperitifs' },
          items: [
            { n: 'Ostras Pedrín', d: 'Vicente Gandía', precio: 3.5 },
            { n: 'Algueña', precio: 4 },
            { n: 'Martini Bianco', precio: 5 },
            { n: 'Martini Rosso', precio: 5 },
            { n: 'Petroni', precio: 6 },
            { n: 'Martini Riserva Speciale Rubino', precio: 8 },
            { n: 'Campari', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] }
          ]
        },
        {
          id: 'ginebra',
          t: { es: 'Ginebra', en: 'Gin', fr: 'Gin', de: 'Gin' },
          items: [
            { n: 'Beefeater', precio: 9 },
            { n: 'Beefeater Black', precio: 9 },
            { n: 'Beefeater Pink', precio: 9 },
            { n: 'Seagram’s', precio: 9 },
            { n: 'Larios Rosé', precio: 9 },
            { n: { es: 'Tanqueray 0,0 %', en: 'Tanqueray 0.0% (alcohol-free)', fr: 'Tanqueray 0,0 % (sans alcool)', de: 'Tanqueray 0,0 % (alkoholfrei)' }, precio: 9 },
            { n: 'Gin Mare', precio: 10 },
            { n: 'Hendrick’s', precio: 12 },
            { n: 'Bulldog', precio: 12 },
            { n: 'Martin Miller’s', precio: 14 }
          ]
        },
        {
          id: 'vodka',
          t: 'Vodka',
          items: [
            { n: 'Absolut', precio: 10 },
            { n: 'Grey Goose', precio: 12 },
            { n: 'Belvedere', precio: 14 }
          ]
        },
        {
          id: 'ron',
          t: { es: 'Ron', en: 'Rum', fr: 'Rhum', de: 'Rum' },
          items: [
            { n: 'Havana Club 7', precio: 9 },
            { n: 'Havana Club Añejo', precio: 10 },
            { n: 'Diplomático Mantuano', precio: 13 },
            { n: 'Diplomático Reserva Exclusiva', precio: 14 },
            { n: 'Matusalem Gran Reserva 15', precio: 14 },
            { n: 'Don Papa', precio: 14 }
          ]
        },
        {
          id: 'whisky',
          t: 'Whisky',
          items: [
            { n: 'Ballantine’s', precio: 9 },
            { n: 'Jameson', precio: 10 },
            { n: 'Johnnie Walker Black Label', precio: 12 },
            { n: 'Chivas Regal 12', precio: 14 },
            { n: 'Glenmorangie The Original 12', precio: 14 },
            { n: 'The Macallan 12 Double Cask', precio: 18 },
            { n: 'Ardbeg 10', precio: 18 }
          ]
        },
        {
          id: 'tequila',
          t: 'Tequila',
          items: [
            { n: 'Olmeca', formatos: [{ f: 'chupito', p: 4 }, { f: 'copa', p: 10 }] },
            /* PENDIENTE: confirmar la variedad de cada Código 1530 */
            { n: 'Código 1530 Blanco', formatos: [{ f: 'chupito', p: 7 }, { f: 'copa', p: 10 }] },
            { n: 'Código 1530 Reposado', formatos: [{ f: 'chupito', p: 10 }, { f: 'copa', p: 15 }] },
            { n: 'Patrón Reposado', precio: 16 },
            { n: 'Patrón XO Café', precio: 18 }
          ]
        },
        {
          id: 'brandy',
          t: { es: 'Coñac y brandy', en: 'Cognac & brandy', fr: 'Cognac et brandy', de: 'Cognac & Brandy' },
          items: [
            { n: 'Magno', precio: 6 },
            { n: '1866', precio: 13 },
            { n: 'Hennessy VS', precio: 13 }
          ]
        },
        {
          id: 'licores',
          t: { es: 'Licores', en: 'Liqueurs', fr: 'Liqueurs', de: 'Liköre' },
          items: [
            { n: 'Pacharán', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: 'Amaretto Disaronno', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: 'Licor 43', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: 'Frangelico', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: { es: 'Orujo de hierbas', en: 'Herbal orujo', fr: 'Orujo aux herbes', de: 'Kräuter-Orujo' }, formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: { es: 'Aguardiente de orujo', en: 'Orujo brandy', fr: 'Eau-de-vie d’orujo', de: 'Orujo-Tresterbrand' }, formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: 'Ricard', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: 'Jägermeister', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 5 }] },
            { n: 'Baileys', formatos: [{ f: 'pequeno', p: 3 }, { f: 'copa', p: 6 }] }
          ]
        },
        {
          id: 'refrescos',
          t: { es: 'Agua y refrescos', en: 'Water & soft drinks', fr: 'Eaux et sodas', de: 'Wasser & Softdrinks' },
          items: [
            { n: { es: 'Agua mineral', en: 'Still water', fr: 'Eau plate', de: 'Stilles Wasser' }, precio: 3 },
            { n: { es: 'Agua con gas', en: 'Sparkling water', fr: 'Eau gazeuse', de: 'Mineralwasser mit Kohlensäure' }, precio: 3 },
            { n: { es: 'Refrescos', en: 'Soft drinks', fr: 'Sodas', de: 'Softdrinks' }, precio: 3 },
            { n: { es: 'Tónicas Fever-Tree', en: 'Fever-Tree tonics', fr: 'Tonics Fever-Tree', de: 'Fever-Tree Tonics' }, d: { es: 'Gama completa', en: 'Full range', fr: 'Toute la gamme', de: 'Ganzes Sortiment' }, precio: 3 },
            { n: { es: 'Zumos', en: 'Juices', fr: 'Jus de fruits', de: 'Säfte' }, precio: 4 },
            { n: 'Red Bull', precio: 4 }
          ]
        }
      ]
    },

    /* ============================ CERVEZAS ============================ */
    {
      id: 'cervezas',
      t: { es: 'Cervezas', en: 'Beers', fr: 'Bières', de: 'Biere' },
      secciones: [
        {
          id: 'cerveza',
          t: { es: 'Cervezas', en: 'Beers', fr: 'Bières', de: 'Biere' },
          items: [
            { n: 'Estrella de Levante', d: { es: 'Lager · 4,8 %', en: 'Lager · 4.8%', fr: 'Lager · 4,8 %', de: 'Lager · 4,8 %' }, formatos: [{ f: 'cana', p: 3 }, { f: 'botellin', p: 3.5 }, { f: 'jarra', p: 5 }] },
            { n: 'Turia', d: { es: 'Tostada · 5,4 %', en: 'Amber · 5.4%', fr: 'Ambrée · 5,4 %', de: 'Bernstein · 5,4 %' }, formatos: [{ f: 'cana', p: 3.5 }, { f: 'botellin', p: 3.5 }] },
            { n: 'Inedit', d: { es: 'Malta y trigo con especias · 4,8 %', en: 'Malt & wheat with spices · 4.8%', fr: 'Malt et blé aux épices · 4,8 %', de: 'Malz & Weizen mit Gewürzen · 4,8 %' }, formatos: [{ f: 'botellin', p: 3.75 }] },
            { n: 'Carlsberg', d: { es: 'Pilsner · 5 %', en: 'Pilsner · 5%', fr: 'Pilsner · 5 %', de: 'Pilsner · 5 %' }, formatos: [{ f: 'botellin', p: 4 }] }
          ]
        },
        {
          id: 'sin',
          t: { es: 'Sin alcohol y sin gluten', en: 'Alcohol-free & gluten-free', fr: 'Sans alcool et sans gluten', de: 'Alkoholfrei & glutenfrei' },
          items: [
            { n: 'Estrella de Levante 0,0', d: { es: 'Sin alcohol · 0,0 %', en: 'Alcohol-free · 0.0%', fr: 'Sans alcool · 0,0 %', de: 'Alkoholfrei · 0,0 %' }, formatos: [{ f: 'botellin', p: 3 }] },
            { n: 'Estrella de Levante 0,0 Tostada', d: { es: 'Sin alcohol, tostada · 0,0 %', en: 'Alcohol-free amber · 0.0%', fr: 'Ambrée sans alcool · 0,0 %', de: 'Alkoholfrei, Bernstein · 0,0 %' }, formatos: [{ f: 'botellin', p: 3.5 }] },
            { n: 'Free Damm', d: { es: 'Sin alcohol · 0,0 %', en: 'Alcohol-free · 0.0%', fr: 'Sans alcool · 0,0 %', de: 'Alkoholfrei · 0,0 %' }, formatos: [{ f: 'botellin', p: 3 }] },
            { n: 'Daura', d: { es: 'Sin gluten · 5,4 %', en: 'Gluten-free · 5.4%', fr: 'Sans gluten · 5,4 %', de: 'Glutenfrei · 5,4 %' }, formatos: [{ f: 'botellin', p: 3 }] }
          ]
        }
      ]
    },

    /* ============================ VINOS ============================ */
    {
      id: 'vinos',
      t: { es: 'Vinos', en: 'Wines', fr: 'Vins', de: 'Weine' },
      secciones: [
        {
          id: 'blancos',
          t: { es: 'Blancos', en: 'White wines', fr: 'Vins blancs', de: 'Weißweine' },
          grupos: [
            { r: 'Alicante', items: [
              { n: 'La Pitxotxa', d: { es: 'Moscatel de Alejandría', en: 'Muscat of Alexandria', fr: 'Muscat d’Alexandrie', de: 'Muskat von Alexandria' }, formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 16 }] }
            ] },
            { r: 'Rueda', items: [
              { n: 'Analivia', d: 'Verdejo', formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 16 }] },
              { n: 'Montespina', d: 'Sauvignon Blanc', formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 16 }] },
              { n: 'Circe', d: 'Verdejo', formatos: [{ f: 'copa', p: 4.5 }, { f: 'botella', p: 21 }] }
            ] },
            { r: 'Ribeiro', items: [
              { n: 'A Telleira', d: { es: 'Godello · sobre lías', en: 'Godello · on lees', fr: 'Godello · sur lies', de: 'Godello · auf der Hefe' }, formatos: [{ f: 'copa', p: 4.5 }, { f: 'botella', p: 24 }] }
            ] },
            { r: 'Rías Baixas', items: [
              { n: 'Pentecostés Varietales', d: 'Albariño, Caíño, Loureira, Treixadura, Godello', formatos: [{ f: 'botella', p: 31 }] }
            ] },
            { r: { es: 'Borgoña', en: 'Burgundy', fr: 'Bourgogne', de: 'Burgund' }, items: [
              { n: 'Edouard Delaunay Bourgogne 2022', d: 'Chardonnay', formatos: [{ f: 'botella', p: 38.5 }] }
            ] },
            { r: { es: 'Marlborough · Nueva Zelanda', en: 'Marlborough · New Zealand', fr: 'Marlborough · Nouvelle-Zélande', de: 'Marlborough · Neuseeland' }, items: [
              { n: 'Cloudy Bay 2024', d: 'Sauvignon Blanc', formatos: [{ f: 'botella', p: 46.5 }] }
            ] },
            { r: 'Rioja', items: [
              { n: 'Finca Montalvillo', d: 'Garnacha Blanca, Maturana Blanca', formatos: [{ f: 'magnum', p: 52 }] }
            ] },
            { r: { es: 'V.T. Castilla y León', en: 'V.T. Castilla y León', fr: 'V.T. Castilla y León', de: 'V.T. Castilla y León' }, items: [
              { n: 'Abadía Retuerta Le Domaine', d: 'Verdejo, Sauvignon Blanc', formatos: [{ f: 'botella', p: 52 }] }
            ] }
          ]
        },
        {
          id: 'rosados',
          t: { es: 'Rosados', en: 'Rosé wines', fr: 'Vins rosés', de: 'Roséweine' },
          grupos: [
            { r: 'Alicante', items: [
              { n: 'La Pitxotxa Rosado', d: 'Monastrell', formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 16 }] }
            ] },
            { r: 'Côtes de Provence', items: [
              { n: 'Minuty Prestige', d: 'Garnacha, Cinsault', formatos: [{ f: 'botella', p: 36 }] },
              { n: 'Whispering Angel', d: 'Cinsault, Garnacha', formatos: [{ f: 'botella', p: 40.5 }] }
            ] }
          ]
        },
        {
          id: 'tintos',
          t: { es: 'Tintos', en: 'Red wines', fr: 'Vins rouges', de: 'Rotweine' },
          grupos: [
            { r: 'Alicante', items: [
              { n: 'Vinalopó 2022', d: { es: 'Alicante Bouschet · 12 meses en roble', en: 'Alicante Bouschet · 12 months in oak', fr: 'Alicante Bouschet · 12 mois en fût de chêne', de: 'Alicante Bouschet · 12 Monate im Eichenfass' }, formatos: [{ f: 'botella', p: 18 }] },
              { n: 'Vinalopó Crianza 2022', d: 'Monastrell, Cabernet Sauvignon', formatos: [{ f: 'botella', p: 18 }] },
              { n: 'Patojo 2023', d: { es: 'Monastrell · 10 meses en barrica', en: 'Monastrell · 10 months in barrel', fr: 'Monastrell · 10 mois en barrique', de: 'Monastrell · 10 Monate im Barrique' }, formatos: [{ f: 'botella', p: 23 }] }
            ] },
            { r: 'Utiel-Requena', items: [
              { n: 'Vicente Gandía Bobal', d: 'Bobal', formatos: [{ f: 'botella', p: 25 }] },
              { n: 'Parcela CV05', d: 'Cabernet Sauvignon', formatos: [{ f: 'botella', p: 26.5 }] }
            ] },
            { r: 'Rioja', items: [
              { n: 'Ondarre 7 Parcelas', d: 'Tempranillo, Mazuelo', formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 19 }] },
              { n: 'Eguiluz Crianza', d: 'Tempranillo', formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 20 }] }
            ] },
            { r: 'Ribera del Duero', items: [
              { n: 'Lambuena', d: 'Tinta Fina', formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 17 }] },
              { n: 'Malasenda Crianza', d: 'Tinta Fina', formatos: [{ f: 'botella', p: 26 }] },
              { n: 'Teófilo Reyes Crianza', d: 'Tempranillo', formatos: [{ f: 'botella', p: 29 }] },
              { n: 'Pesquera Crianza', d: 'Tempranillo', formatos: [{ f: 'botella', p: 42 }] },
              { n: 'Avelino Vegas', d: 'Tinta Fina', formatos: [{ f: 'botella', p: 53 }] }
            ] },
            { r: 'Toro', items: [
              { n: 'El Pillo', d: 'Tinta de Toro', formatos: [{ f: 'copa', p: 4 }, { f: 'botella', p: 17 }] },
              { n: 'Numanthia', d: 'Tinta de Toro', formatos: [{ f: 'botella', p: 82 }] }
            ] },
            { r: 'Bierzo', items: [
              { n: 'Tilenus Las Laderas 2021', d: 'Mencía', formatos: [{ f: 'botella', p: 24 }] }
            ] },
            { r: 'V.T. Castilla y León', items: [
              { n: 'Mauro Crianza 2023', d: 'Tempranillo', formatos: [{ f: 'botella', p: 48 }] }
            ] }
          ]
        },
        {
          id: 'cavas',
          t: { es: 'Cavas', en: 'Cava', fr: 'Cavas', de: 'Cava' },
          items: [
            { n: 'Segura Viudas Vintage', formatos: [{ f: 'copa', p: 5.5 }] },
            { n: 'De Nariz «Zero Dosage»', d: 'Monastrell', formatos: [{ f: 'botella', p: 28 }] },
            { n: 'Segura Viudas Brut Reserva Heredad', d: 'Macabeo, Parellada', formatos: [{ f: 'botella', p: 28 }] },
            { n: 'Juana la Loca Rosé', d: 'Garnacha, Pinot Noir', formatos: [{ f: 'botella', p: 29 }] }
          ]
        },
        {
          id: 'champan',
          t: { es: 'Champán', en: 'Champagne', fr: 'Champagne', de: 'Champagner' },
          items: [
            { n: 'Telmont Réserve Brut', d: 'Chardonnay, Pinot Meunier, Pinot Noir', formatos: [{ f: 'botella', p: 70 }] },
            { n: 'Telmont Rosé', d: 'Chardonnay, Pinot Meunier, Pinot Noir', formatos: [{ f: 'botella', p: 85 }] },
            { n: 'Ruinart Blanc de Blancs', d: 'Chardonnay', formatos: [{ f: 'botella', p: 130 }] },
            { n: 'Laurent-Perrier Cuvée Rosé Brut', d: 'Pinot Noir', formatos: [{ f: 'botella', p: 140 }] }
          ]
        }
      ]
    }
  ]
};

/* =====================================================================
   MENÚS (botones "Menú de día" y "Menú de noche" de la cabecera)
   Cada plato es { n: nombre, d: detalle }. Para dos opciones a elegir
   dentro del mismo punto, usa { o: [ plato1, plato2 ] } (se muestran con "o").
   fichas: true → los elementos se muestran como etiquetas en línea.
   ===================================================================== */
window.CARTA.menus = [
  {
    id: 'menu-dia',
    icono: 'sol',
    boton: { es: 'Menú de día', en: 'Daily menu', fr: 'Menu du jour', de: 'Tagesmenü' },
    titulo: { es: 'Menú de día', en: 'Daily menu', fr: 'Menu du jour', de: 'Tagesmenü' },
    cuando: { es: 'De lunes a jueves', en: 'Monday to Thursday', fr: 'Du lundi au jeudi', de: 'Montag bis Donnerstag' },
    precio: 20.9,
    incluye: [
      { es: '1 bebida incluida', en: '1 drink included', fr: '1 boisson incluse', de: '1 Getränk inklusive' }
    ],
    cursos: [
      {
        t: { es: 'Entrantes', en: 'Starters', fr: 'Entrées', de: 'Vorspeisen' },
        nota: { es: '2 a elegir', en: 'Choose 2', fr: '2 au choix', de: '2 nach Wahl' },
        items: [
          { n: 'Marinera' },
          { n: { es: 'Boquerones fritos', en: 'Fried anchovies', fr: 'Anchois frits', de: 'Frittierte Sardellen' }, d: { es: '(5 uds.)', en: '(5 pcs.)', fr: '(5 pièces)', de: '(5 Stück)' } },
          { n: { es: 'Cazón en adobo', en: 'Marinated fried dogfish', fr: 'Émissole marinée et frite', de: 'Marinierter frittierter Hundshai' } },
          { n: { es: 'Croqueta de gamba roja', en: 'Red prawn croquette', fr: 'Croquette à la crevette rouge', de: 'Rote-Garnelen-Krokette' }, d: { es: 'con mayo japo', en: 'with Japanese mayo', fr: 'mayonnaise japonaise', de: 'mit japanischer Mayo' } }
        ]
      },
      {
        t: { es: 'Principal', en: 'Main course', fr: 'Plat principal', de: 'Hauptgericht' },
        nota: { es: 'A elegir', en: 'Your choice', fr: 'Au choix', de: 'Nach Wahl' },
        items: [
          { o: [
            { n: 'Arroz del senyoret', d: { es: '', en: '(seafood rice, all peeled)', fr: '(riz aux fruits de mer décortiqués)', de: '(Reis mit geschälten Meeresfrüchten)' } },
            { n: { es: 'Arroz con secreto ibérico', en: 'Rice with Iberian pork secreto', fr: 'Riz au secreto de porc ibérique', de: 'Reis mit Secreto vom iberischen Schwein' } }
          ] }
        ]
      },
      {
        t: { es: 'Postre', en: 'Dessert', fr: 'Dessert', de: 'Dessert' },
        nota: { es: 'A elegir', en: 'Your choice', fr: 'Au choix', de: 'Nach Wahl' },
        items: [
          { o: [
            { n: 'Torrija', d: { es: '', en: '(Spanish-style French toast)', fr: '(pain perdu à l’espagnole)', de: '(spanischer Arme Ritter)' } },
            { n: { es: 'Café', en: 'Coffee', fr: 'Café', de: 'Kaffee' } }
          ] }
        ]
      },
      {
        t: { es: 'Bebida incluida', en: 'Drink included', fr: 'Boisson incluse', de: 'Getränk inklusive' },
        nota: { es: '1 a elegir', en: 'Choose 1', fr: '1 au choix', de: '1 nach Wahl' },
        fichas: true,
        items: [
          { n: { es: 'Caña', en: 'Small draught beer', fr: 'Demi pression', de: 'Kleines Bier vom Fass' } },
          { n: { es: 'Copa de vino de la casa', en: 'Glass of house wine', fr: 'Verre de vin maison', de: 'Glas Hauswein' } },
          { n: { es: 'Refresco', en: 'Soft drink', fr: 'Soda', de: 'Softdrink' } },
          { n: { es: 'Agua', en: 'Water', fr: 'Eau', de: 'Wasser' } }
        ]
      }
    ]
  },
  {
    id: 'menu-noche',
    icono: 'luna',
    noche: true,
    boton: { es: 'Menú de noche', en: 'Evening menu', fr: 'Menu du soir', de: 'Abendmenü' },
    lema: { es: 'La noche pide Majao.', en: 'The night calls for Majao.', fr: 'La nuit appelle Majao.', de: 'Die Nacht verlangt nach Majao.' },
    titulo: 'Noches Majao',
    cuando: { es: 'De lunes a jueves', en: 'Monday to Thursday', fr: 'Du lundi au jeudi', de: 'Montag bis Donnerstag' },
    precio: 23.9,
    incluye: [
      { es: 'Mínimo 2 personas', en: 'Minimum 2 people', fr: 'Minimum 2 personnes', de: 'Mindestens 2 Personen' },
      { es: '1 bebida incluida por persona', en: '1 drink per person included', fr: '1 boisson incluse par personne', de: '1 Getränk pro Person inklusive' }
    ],
    cursos: [
      {
        t: { es: 'Menú para compartir', en: 'Sharing menu', fr: 'Menu à partager', de: 'Menü zum Teilen' },
        items: [
          { n: 'Papas de Río' },
          { n: { es: 'Gambusí frito', en: 'Fried gambusí', fr: 'Gambusí frits', de: 'Frittierte Gambusí' }, d: { es: 'de la Bahía (100 g)', en: 'baby shrimp from the Bay (100 g)', fr: 'petites crevettes de la Baie (100 g)', de: 'kleine Garnelen aus der Bucht (100 g)' } },
          { n: { es: 'Croqueta', en: 'Croquette', fr: 'Croquette', de: 'Krokette' }, d: { es: 'de boletus o jamón', en: 'porcini or ham', fr: 'aux cèpes ou au jambon', de: 'Steinpilz oder Schinken' } },
          { n: { es: 'Alcachofa al grill', en: 'Grilled artichoke', fr: 'Artichaut grillé', de: 'Gegrillte Artischocke' }, d: { es: 'con espuma de Idiazábal y virutas de jamón', en: 'with Idiazábal cheese foam and ham shavings', fr: 'espuma d’Idiazábal et copeaux de jambon', de: 'mit Idiazábal-Käseschaum und Schinkenspänen' } },
          { o: [
            { n: { es: 'Montadito de salmón', en: 'Salmon montadito', fr: 'Montadito au saumon', de: 'Lachs-Montadito' }, d: { es: 'con queso brie', en: 'with brie', fr: 'et brie', de: 'mit Brie' } },
            { n: { es: 'Montadito de sobrasada', en: 'Sobrasada montadito', fr: 'Montadito à la sobrasada', de: 'Sobrasada-Montadito' }, d: { es: 'con huevo de codorniz', en: 'with quail egg', fr: 'et œuf de caille', de: 'mit Wachtelei' } }
          ] }
        ],
        pie: { es: '1 bebida incluida por persona', en: '1 drink per person included', fr: '1 boisson incluse par personne', de: '1 Getränk pro Person inklusive' }
      }
    ]
  }
];

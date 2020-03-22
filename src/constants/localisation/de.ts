const LOCALE = (window.navigator as any).userLanguage || window.navigator.language || 'de';
// const LOCALE = 'de';
const MESSAGES = {
  'address': 'Adresse',
  'availableBeds': 'Verfügbare Betten',
  'back': 'Zurück',
  'bedCapacity': 'Bettenbelegung',
  'featureDescription': 'Funktionserklärung',
  'freeBedCapacity': 'Freie Bettenbelegung',
  'contact': 'Kontakt',
  'date': 'Datum',
  'details': 'Details',
  'heatMap': 'Heat Map',
  'heatMapExplanation': 'Benutze den Layerknopf rechts um die Bettensituation verschiedener Katogerien anzuzeigen. Mit dem Slider kannst du das Datum verändern. Klicke auf die Marker um mehr Infos zu einem Krankenhaus zu erhalten.',
  'websiteDescription' : 'Darstellung der aktuellen Belegung von Krankenhausbetten in Münchner Kliniken. Dies ist eine Demo Seite für den Hackathon #WirvsVirus der Bundesregierung und enthält aktuell keine echten Daten. Wir zeigen hier wie viele Betten des Types ICULC, ICUHC und ECMO in den jeweiligen Krankenhäusern frei sind.',
  'iculcExplanation' : 'ICULC: Intensivstationbett mit geringer Betreuung',
  'icuhcExplanation' : 'ICUHC: Intensivstationbett mit starker Betreuung',
  'ecmoExplanation' : 'ECMO: Extrakorporale Membranoxygenierungs Betten',
  'hospitals': 'Krankenhäuser',
  'information': 'Information',
  'link': 'Link',
  'marker': 'Marker',
  'name': 'Name',
  'open': 'Öffnen',
  'phone': 'Telefon',
  'totalCapacity': 'Gesamtkapazität',
  'updated': 'Updated',
  'website': 'Website',

  'iculc': 'ICULC',
  'icuhc': 'ICUHC',
  'ecmo': 'ECMO'
};

export {
  LOCALE,
  MESSAGES 
};

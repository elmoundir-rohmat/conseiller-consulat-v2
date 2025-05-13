import { Procedure } from '../types';

export const procedures: Procedure[] = [
  {
    id: 'cni',
    title: 'Demande/renouvellement CNI',
    shortDescription: "Obtenez votre Carte Nationale d'Identité marocaine depuis l'étranger",
    icon: 'id-card',
    documents: [
      "Formulaire de demande CNIE (disponible au consulat)",
      "Extrait d'acte de naissance récent",
      "4 photos d'identité biométriques (fond blanc)",
      "Justificatif de résidence à l'étranger",
      "Copie de la carte consulaire",
      "Ancienne CNI (en cas de renouvellement)"
    ],
    steps: [
      "Prendre rendez-vous auprès du consulat via leur plateforme en ligne",
      "Remplir le formulaire de demande CNIE",
      "Se présenter personnellement au rendez-vous avec tous les documents requis",
      "Procéder à la prise d'empreintes digitales et signature électronique",
      "Payer les frais consulaires (75€ environ)",
      "Récupérer le récépissé de dépôt de la demande",
      "Retirer la CNIE lorsqu'elle est disponible (délai moyen: 4-6 semaines)"
    ],
    tips: [
      "Prenez rendez-vous au moins 3 mois avant l'expiration de votre ancienne carte",
      "Vérifiez que vos photos respectent les normes biométriques pour éviter tout rejet",
      "Votre présence physique est obligatoire, aucune procuration n'est possible"
    ],
    timeframe: "4 à 6 semaines",
    countrySpecifics: {
      france: "En France, certains consulats proposent des services mobiles dans différentes villes",
      canada: "Au Canada, prévoir un délai supplémentaire de 2 semaines pour l'acheminement",
      usa: "Aux USA, certains consulats exigent la légalisation préalable des documents américains"
    },
    faq: [
      {
        question: "Puis-je faire une demande de CNI pour mon enfant mineur?",
        answer: "Oui, les parents peuvent faire la demande pour leurs enfants mineurs. La présence de l'enfant est requise, ainsi que celle du parent demandeur avec un acte de naissance récent et le livret de famille."
      },
      {
        question: "Que faire en cas de perte ou vol de ma CNI à l'étranger?",
        answer: "En cas de perte/vol, vous devez d'abord faire une déclaration auprès des autorités locales du pays de résidence, puis apporter cette déclaration au consulat avec votre demande de nouvelle carte."
      },
      {
        question: "Ma CNI est-elle valable pour voyager en Europe?",
        answer: "La CNI marocaine n'est pas un document de voyage pour l'Europe. Vous devez utiliser votre passeport marocain ou le document de voyage de votre pays de résidence."
      }
    ]
  },
  {
    id: 'mariage',
    title: 'Mariage (avec/sans contrat)',
    shortDescription: "Procédure pour célébrer un mariage marocain depuis l'étranger",
    icon: 'heart',
    documents: [
      "Formulaire de demande d'acte de mariage (disponible au consulat)",
      "Extrait d'acte de naissance des deux époux de moins de 3 mois",
      "Copie des CNI/passeports des deux époux",
      "Certificat de capacité matrimoniale pour l'époux étranger (si applicable)",
      "Certificat de conversion à l'Islam (si applicable)",
      "Justificatif de résidence",
      "Certificat médical prénuptial pour les deux époux",
      "Photos d'identité récentes"
    ],
    steps: [
      "Déposer le dossier complet au consulat marocain",
      "Signer la demande en présence des deux époux et de deux témoins musulmans (pour les hommes)",
      "S'acquitter des frais consulaires",
      "Célébration de l'acte par les adouls (notaires traditionnels) au consulat",
      "Récupérer l'acte de mariage après validation"
    ],
    tips: [
      "Prenez rendez-vous au moins 2 mois avant la date souhaitée du mariage",
      "Pour un mariage avec contrat spécifique, consultez un avocat marocain au préalable",
      "Si l'un des époux ne parle pas arabe, prévoyez un interprète assermenté"
    ],
    timeframe: "2 à 4 semaines après dépôt du dossier complet",
    countrySpecifics: {
      france: "En France, le certificat de coutume peut être exigé par la mairie française",
      belgique: "En Belgique, une traduction jurée de l'acte peut être demandée par l'administration",
      canada: "Au Canada, l'acte de mariage marocain devra être légalisé pour être reconnu"
    },
    faq: [
      {
        question: "Est-il possible de faire un mariage par procuration?",
        answer: "Oui, mais uniquement dans des cas exceptionnels. L'un des époux peut être représenté par un mandataire avec une procuration spéciale légalisée."
      },
      {
        question: "Quelles sont les différences entre un mariage avec ou sans contrat?",
        answer: "Le mariage sans contrat applique le régime standard du code de la famille marocain. Avec contrat, vous pouvez spécifier des clauses particulières concernant les biens, la polygamie, etc."
      },
      {
        question: "Je suis une femme marocaine et souhaite épouser un non-musulman, est-ce possible?",
        answer: "Selon la loi marocaine, une femme musulmane ne peut épouser qu'un homme musulman. L'époux doit donc se convertir à l'Islam et fournir un certificat de conversion."
      }
    ]
  },
  {
    id: 'legalisation',
    title: 'Légalisation de signature',
    shortDescription: "Faire authentifier vos documents pour qu'ils soient reconnus au Maroc",
    icon: 'check-square',
    documents: [
      "Document original à légaliser",
      "Copie de votre CNI ou passeport marocain",
      "Carte consulaire ou justificatif d'immatriculation consulaire",
      "Formulaire de demande de légalisation (disponible au consulat)"
    ],
    steps: [
      "Remplir le formulaire de demande de légalisation",
      "Présenter le document original à légaliser au consulat",
      "Signer le document devant l'agent consulaire",
      "Payer les frais de légalisation (variables selon le type de document)",
      "Récupérer le document légalisé"
    ],
    tips: [
      "Certains documents nécessitent d'abord une légalisation par les autorités locales avant la légalisation consulaire",
      "Prévoyez plusieurs copies si vous avez besoin de multiples légalisations",
      "Les documents en langue étrangère peuvent nécessiter une traduction assermentée"
    ],
    timeframe: "1 à 3 jours ouvrables",
    countrySpecifics: {
      france: "En France, certains documents doivent d'abord passer par la Chambre de Commerce ou la Cour d'Appel",
      espagne: "En Espagne, les documents doivent souvent être apostillés avant la légalisation consulaire",
      italie: "En Italie, une pré-légalisation par la Préfecture peut être requise"
    },
    faq: [
      {
        question: "Peut-on faire légaliser tous types de documents?",
        answer: "Non, certains documents comme les contrats commerciaux internationaux ou les documents judiciaires peuvent nécessiter d'autres procédures. Consultez le consulat pour votre cas spécifique."
      },
      {
        question: "La légalisation consulaire est-elle reconnue internationalement?",
        answer: "Non, elle est principalement reconnue au Maroc et certifie que la signature est bien celle du signataire. Pour une reconnaissance internationale, l'Apostille ou d'autres procédures peuvent être nécessaires."
      },
      {
        question: "Puis-je envoyer quelqu'un d'autre pour légaliser ma signature?",
        answer: "Non, la personne dont la signature doit être légalisée doit être physiquement présente pour signer devant l'agent consulaire."
      }
    ]
  },
  {
    id: 'procuration',
    title: 'Procuration vente immobilière',
    shortDescription: "Autoriser un tiers à vendre votre bien immobilier au Maroc",
    icon: 'file-signature',
    documents: [
      "Formulaire de procuration (disponible au consulat)",
      "Copie de votre CNI ou passeport marocain",
      "Copie de la carte d'identité du mandataire",
      "Titre de propriété du bien immobilier (copie)",
      "Justificatif d'adresse récent",
      "Informations détaillées sur le bien (adresse exacte, superficie, etc.)"
    ],
    steps: [
      "Rédiger la procuration détaillant précisément les pouvoirs accordés",
      "Prendre rendez-vous au consulat pour la légalisation",
      "Signer la procuration devant l'agent consulaire",
      "Payer les frais consulaires (variables selon les consulats)",
      "Envoyer la procuration légalisée au mandataire au Maroc",
      "Le mandataire doit faire certifier la procuration par un notaire marocain"
    ],
    tips: [
      "Soyez très précis dans la rédaction des pouvoirs accordés au mandataire",
      "Limitez la durée de validité de la procuration",
      "Consultez un avocat pour les transactions importantes",
      "Spécifiez le prix de vente minimal dans la procuration"
    ],
    timeframe: "Légalisation consulaire: 1-3 jours. Validité: généralement 1 an maximum",
    countrySpecifics: {
      france: "En France, certains consulats proposent des modèles types de procuration",
      belgique: "En Belgique, la procuration doit parfois être traduite en néerlandais ou allemand selon la région",
      canada: "Au Canada, prévoyez un délai supplémentaire pour l'acheminement vers le Maroc"
    },
    faq: [
      {
        question: "Puis-je révoquer une procuration déjà établie?",
        answer: "Oui, vous pouvez révoquer une procuration à tout moment en suivant la même procédure que pour l'établissement, en précisant qu'il s'agit d'une révocation. Informez également votre mandataire et toutes les parties concernées."
      },
      {
        question: "À qui puis-je donner procuration?",
        answer: "Vous pouvez donner procuration à toute personne majeure de votre choix (famille, ami, avocat, notaire). Il est recommandé de choisir une personne de confiance pour les transactions immobilières."
      },
      {
        question: "La procuration établie à l'étranger est-elle directement valable au Maroc?",
        answer: "La procuration légalisée par le consulat doit généralement être authentifiée par un notaire marocain (adoul) avant d'être utilisée pour une transaction immobilière au Maroc."
      }
    ]
  },
  {
    id: 'certificat-vie',
    title: 'Certificat de vie',
    shortDescription: "Attestation prouvant que vous êtes toujours en vie, nécessaire pour certaines pensions",
    icon: 'check-circle',
    documents: [
      "Carte consulaire ou justificatif d'immatriculation",
      "Carte nationale d'identité ou passeport marocain",
      "Formulaire de demande de certificat de vie (disponible au consulat)",
      "Éventuellement le formulaire spécifique de l'organisme demandeur (caisse de retraite, etc.)"
    ],
    steps: [
      "Se présenter personnellement au consulat",
      "Présenter les documents d'identité requis",
      "Remplir et signer le formulaire de demande",
      "S'acquitter des frais consulaires le cas échéant",
      "Récupérer le certificat de vie"
    ],
    tips: [
      "Vérifiez si l'organisme qui demande ce certificat a un formulaire spécifique à faire remplir",
      "Certains consulats proposent des permanences délocalisées pour les personnes à mobilité réduite",
      "Renouvelez ce certificat selon la périodicité demandée par votre caisse de retraite"
    ],
    timeframe: "Délivré le jour même dans la plupart des cas",
    countrySpecifics: {
      france: "En France, de nombreuses mairies peuvent également délivrer ce document",
      belgique: "En Belgique, les administrations communales peuvent délivrer ce certificat",
      espagne: "En Espagne, prévoir parfois un délai de 2-3 jours pour certains consulats"
    },
    faq: [
      {
        question: "Puis-je demander un certificat de vie pour un proche?",
        answer: "Non, la personne concernée doit se présenter personnellement au consulat, car le document atteste que cette personne est vivante."
      },
      {
        question: "Quelle est la durée de validité d'un certificat de vie?",
        answer: "Généralement 3 mois, mais cela peut varier selon l'organisme qui le demande. Certaines caisses de retraite exigent un renouvellement mensuel, d'autres trimestriel ou annuel."
      },
      {
        question: "Je suis à mobilité réduite et ne peux pas me déplacer au consulat, que faire?",
        answer: "Certains consulats organisent des visites à domicile ou des permanences délocalisées. Contactez votre consulat pour connaître les modalités spécifiques pour les personnes à mobilité réduite."
      }
    ]
  },
  {
    id: 'passeport',
    title: 'Passeport',
    shortDescription: "Obtenir ou renouveler votre passeport marocain depuis l'étranger",
    icon: 'book',
    documents: [
      "Formulaire de demande de passeport (disponible au consulat)",
      "Carte nationale d'identité marocaine valide",
      "Carte consulaire ou justificatif d'immatriculation",
      "4 photos d'identité biométriques récentes (fond blanc)",
      "Ancien passeport (en cas de renouvellement)",
      "Justificatif de résidence dans la circonscription consulaire",
      "Acte de naissance récent (pour une première demande)"
    ],
    steps: [
      "Prendre rendez-vous auprès du consulat",
      "Remplir le formulaire de demande de passeport",
      "Se présenter personnellement au rendez-vous avec tous les documents requis",
      "Procéder à la prise d'empreintes digitales",
      "Payer les frais consulaires (environ 80-100€)",
      "Récupérer le récépissé de dépôt",
      "Retirer le passeport lorsqu'il est disponible"
    ],
    tips: [
      "Entamez les démarches au moins 6 mois avant l'expiration de votre ancien passeport",
      "Vérifiez que vos photos respectent strictement les normes biométriques",
      "Pour les enfants mineurs, la présence du parent demandeur et de l'enfant est obligatoire"
    ],
    timeframe: "6 à 8 semaines en moyenne",
    countrySpecifics: {
      france: "En France, certains consulats proposent la prise de rendez-vous en ligne",
      canada: "Au Canada, comptez plutôt 8-10 semaines de délai",
      espagne: "En Espagne, certains consulats proposent un service accéléré moyennant des frais supplémentaires"
    },
    faq: [
      {
        question: "Mon enfant doit-il avoir son propre passeport?",
        answer: "Oui, depuis 2011, les enfants mineurs ne peuvent plus figurer sur le passeport des parents et doivent avoir leur propre passeport individuel."
      },
      {
        question: "Que faire en cas de perte ou vol de mon passeport à l'étranger?",
        answer: "Faire une déclaration de perte/vol auprès des autorités locales du pays de résidence, puis se présenter au consulat avec cette déclaration, une CNI valide et les documents habituels pour une demande de nouveau passeport."
      },
      {
        question: "Puis-je voyager au Maroc avec un passeport qui expire bientôt?",
        answer: "Il est recommandé que votre passeport ait une validité d'au moins 6 mois au-delà de la date de retour prévue. Même pour entrer au Maroc, cette règle peut être appliquée par les compagnies aériennes."
      }
    ]
  },
  {
    id: 'acte-naissance',
    title: 'Acte de naissance',
    shortDescription: "Obtenir une copie intégrale ou un extrait de votre acte de naissance marocain",
    icon: 'file-text',
    documents: [
      "Formulaire de demande d'acte de naissance (disponible au consulat)",
      "Carte nationale d'identité ou passeport marocain",
      "Carte consulaire ou justificatif d'immatriculation",
      "Copie de l'ancien acte de naissance si disponible",
      "Livret de famille (facultatif, mais utile)"
    ],
    steps: [
      "Remplir le formulaire de demande en précisant le type d'acte souhaité (intégral ou extrait)",
      "Déposer la demande au consulat avec les pièces justificatives",
      "Payer les frais consulaires (variables selon les consulats)",
      "Récupérer l'acte de naissance lorsqu'il est disponible"
    ],
    tips: [
      "Précisez dans votre demande si vous souhaitez un acte intégral ou un extrait",
      "Pour les actes destinés à l'étranger, demandez une copie conforme ou une traduction officielle",
      "L'extrait d'acte de naissance a une validité de 3 mois pour les démarches administratives au Maroc"
    ],
    timeframe: "2 à 4 semaines en moyenne",
    countrySpecifics: {
      france: "En France, possibilité de demande en ligne pour certains consulats",
      belgique: "En Belgique, l'acte peut être envoyé par courrier après vérification de l'identité",
      canada: "Au Canada, comptez 4-6 semaines en raison des délais postaux"
    },
    faq: [
      {
        question: "Quelle est la différence entre un acte intégral et un extrait?",
        answer: "L'acte intégral contient toutes les mentions et annotations marginales (mariages, divorces, décès, etc.). L'extrait ne contient que les informations de base sur la naissance et l'identité."
      },
      {
        question: "Puis-je demander un acte de naissance pour un membre de ma famille?",
        answer: "Oui, vous pouvez demander l'acte de naissance de vos ascendants directs, descendants et conjoint(e) en présentant les documents prouvant votre lien de parenté."
      },
      {
        question: "L'acte de naissance délivré par le consulat est-il accepté pour des démarches à l'étranger?",
        answer: "Généralement oui, mais certaines administrations étrangères peuvent exiger une traduction assermentée ou une légalisation supplémentaire selon les accords bilatéraux existants."
      }
    ]
  },
  {
    id: 'reconnaissance-enfant',
    title: 'Reconnaissance d\'enfant',
    shortDescription: "Procédure pour reconnaître légalement un enfant auprès des autorités marocaines",
    icon: 'users',
    documents: [
      "Acte de naissance de l'enfant (moins de 3 mois)",
      "Carte nationale d'identité ou passeport du parent déclarant",
      "Carte consulaire ou justificatif d'immatriculation",
      "Certificat de célibat/vie maritale selon la situation",
      "Attestation de concordance entre les noms français et arabes si nécessaire",
      "Test ADN dans certains cas particuliers (à vérifier avec le consulat)"
    ],
    steps: [
      "Prendre rendez-vous auprès du consulat",
      "Préparer tous les documents requis",
      "Se présenter personnellement avec l'enfant si possible",
      "Faire une déclaration formelle devant l'officier d'état civil consulaire",
      "Signer l'acte de reconnaissance",
      "Payer les frais consulaires",
      "Récupérer l'acte de reconnaissance ou l'acte de naissance mis à jour"
    ],
    tips: [
      "La reconnaissance paternelle doit être établie avant que l'enfant atteigne la majorité",
      "Pour les enfants nés hors mariage, consultez un avocat spécialisé en droit marocain",
      "La procédure peut varier selon votre situation matrimoniale"
    ],
    timeframe: "Établissement de l'acte: 1-2 jours. Transcription au Maroc: 2-3 mois",
    countrySpecifics: {
      france: "En France, une reconnaissance préalable à la naissance est possible dans certains cas",
      belgique: "En Belgique, un acte de reconnaissance établi par l'autorité belge doit être légalisé",
      canada: "Au Canada, des traductions assermentées des documents peuvent être exigées"
    },
    faq: [
      {
        question: "Un enfant né hors mariage peut-il être reconnu selon la loi marocaine?",
        answer: "La situation est complexe. Le droit marocain ne reconnaît pas formellement les enfants nés hors mariage de la même manière que le droit occidental. Consultez un avocat spécialisé pour votre situation spécifique."
      },
      {
        question: "L'enfant reconnu peut-il porter le nom de famille du père?",
        answer: "Oui, une fois la reconnaissance établie légalement, l'enfant peut porter le nom du père et bénéficier des droits qui en découlent (nationalité, héritage, etc.)."
      },
      {
        question: "La mère doit-elle être présente lors de la reconnaissance par le père?",
        answer: "Ce n'est pas toujours obligatoire, mais sa présence peut faciliter la procédure. Dans certains cas complexes, son consentement écrit peut être demandé."
      }
    ]
  },
  {
    id: 'transfert-corps',
    title: 'Transfert de corps',
    shortDescription: "Procédure pour rapatrier la dépouille d'un défunt marocain vers le Maroc",
    icon: 'activity',
    documents: [
      "Acte de décès original",
      "Certificat de non-contagion et non-épidémie",
      "Certificat de mise en bière hermétique",
      "Autorisation de transport international délivrée par les autorités locales",
      "Passeport du défunt ou CNI",
      "Certificat d'embaumement",
      "Justificatif de prise en charge du rapatriement (assurance ou autre)"
    ],
    steps: [
      "Contacter immédiatement le consulat pour signaler le décès",
      "Choisir une entreprise de pompes funèbres habilitée aux transferts internationaux",
      "Obtenir les certificats médicaux et administratifs dans le pays de décès",
      "Déposer le dossier complet au consulat",
      "Obtenir l'autorisation consulaire de rapatriement",
      "Procéder au transport avec l'entreprise funéraire",
      "Coordonner l'accueil de la dépouille au Maroc avec une entreprise locale"
    ],
    tips: [
      "Vérifiez si le défunt avait une assurance rapatriement (carte bancaire, assurance voyage, etc.)",
      "Consultez au préalable la liste des entreprises funéraires recommandées par le consulat",
      "Prévoyez un budget important (5000-7000€ en moyenne) si aucune assurance ne couvre les frais"
    ],
    timeframe: "Procédure administrative: 2-5 jours. Transport effectif: 1-3 jours supplémentaires",
    countrySpecifics: {
      france: "En France, la DECES-TM de la Banque Populaire peut couvrir les frais pour les adhérents",
      belgique: "En Belgique, l'attestation du médecin légiste est obligatoire",
      pays_bas: "Aux Pays-Bas, un certificat spécial de non-radioactivité peut être demandé"
    },
    faq: [
      {
        question: "Est-il possible d'être enterré dans le pays de résidence?",
        answer: "Oui, c'est possible. De nombreuses villes européennes disposent de carrés musulmans dans leurs cimetières. Le consulat peut délivrer une autorisation d'inhumation locale si la famille le souhaite."
      },
      {
        question: "Combien coûte un rapatriement de corps vers le Maroc?",
        answer: "Le coût varie entre 5000 et 7000€ selon le pays de départ, la distance et la compagnie aérienne. Ce montant comprend les frais funéraires, administratifs et de transport. Certaines assurances ou mutuelles peuvent prendre en charge tout ou partie de ces frais."
      },
      {
        question: "Combien de temps faut-il pour rapatrier un corps au Maroc?",
        answer: "Le délai total est généralement de 3 à 8 jours entre le décès et l'inhumation au Maroc. Les démarches administratives prennent 2-5 jours, puis le transport 1-3 jours selon la destination finale au Maroc."
      }
    ]
  },
  {
    id: 'certificat-celibat',
    title: 'Certificat de célibat',
    shortDescription: "Obtenir une attestation de votre statut matrimonial pour un mariage au Maroc",
    icon: 'user',
    documents: [
      "Formulaire de demande (disponible au consulat)",
      "Carte nationale d'identité ou passeport marocain",
      "Carte consulaire ou justificatif d'immatriculation",
      "Acte de naissance récent (moins de 3 mois)",
      "Déclaration sur l'honneur (parfois demandée)",
      "Témoignages de deux personnes (selon les consulats)"
    ],
    steps: [
      "Remplir le formulaire de demande de certificat de célibat",
      "Rassembler tous les documents requis",
      "Se présenter personnellement au consulat",
      "Signer la déclaration sur l'honneur le cas échéant",
      "Présenter les témoins si requis",
      "Payer les frais consulaires",
      "Récupérer le certificat"
    ],
    tips: [
      "Ce certificat a une durée de validité limitée (généralement 3 mois)",
      "Certains consulats exigent la présence de deux témoins marocains pour attester du célibat",
      "Si vous êtes divorcé(e), vous devrez fournir l'acte de divorce définitif"
    ],
    timeframe: "1 à 5 jours ouvrables selon les consulats",
    countrySpecifics: {
      france: "En France, certains consulats délivrent le certificat le jour même",
      belgique: "En Belgique, un certificat de résidence avec mention de l'état civil peut être demandé en complément",
      espagne: "En Espagne, la procédure peut prendre jusqu'à 1 semaine"
    },
    faq: [
      {
        question: "Peut-on obtenir ce certificat si on est divorcé(e)?",
        answer: "Non, ce certificat est réservé aux personnes n'ayant jamais été mariées. Si vous êtes divorcé(e), vous devrez demander un certificat de non-remariage et fournir l'acte de divorce."
      },
      {
        question: "Ce certificat est-il obligatoire pour se marier au Maroc?",
        answer: "Oui, il fait partie des documents requis pour constituer un dossier de mariage au Maroc, particulièrement si vous résidez à l'étranger."
      },
      {
        question: "Peut-on demander ce certificat par correspondance?",
        answer: "Non, la présence personnelle du demandeur est généralement exigée, car il s'agit d'une attestation sur l'honneur de votre statut matrimonial."
      }
    ]
  }
];
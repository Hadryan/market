'use strict';

/**
 * @ngdoc service
 * @name ortolangMarketApp.MARKET_FR
 * @description
 * # MARKET_FR
 * Constant in the ortolangMarketApp.
 */
angular.module('ortolangMarketApp')
    .constant('MARKET_FR', {
        MARKET: {
            ALL_TYPE: 'Tous',
            NEW_RESOURCES: 'Publications récentes',
            WEBSITES: 'Sites web',
            WEBSITE: 'Site web',
            SEARCH_PAGE: 'Rechercher dans le contenu',
            REDACTOR_CHOICES: 'Choix de l\'équipe',
            CONDITIONS_OF_USE: 'Conditions d\'utilisation',
            BROWSE: 'Voir le contenu',
            GO_BACK_INFO: 'Retourner à la fiche',
            ADD_TO_FAVOURITES: 'Ajouter à mes favoris',
            USE_IN_MY_PROJECT: 'Utiliser dans mon projet',
            ADDITIONAL_INFORMATION: 'Informations complémentaires',
            KEYWORDS: 'Mots clés',
            EXTENT: 'Contenu',
            PUBLICATIONS: 'Liste des publications',
            PRIMARY_PUBLICATIONS: 'Publications de référence',
            SECONDARY_PUBLICATIONS: 'Autres Publications',
            ALL_VERSIONS: 'Toutes les versions',
            PRIMARY_LANGUAGE: 'Langue principale',
            DISCOURSE_TYPE: 'Genre du discours',
            LINGUISTIC_SUBJECT: 'Domaines linguistiques',
            PROGRAMMING_LANGUAGE: 'Langages de programmation',
            OPERATING_SYSTEM: 'Systèmes d\'exploitation supportés',
            SUPPORT_TOOL: 'Type de support',
            LANGUAGE: 'Langues concernés par cet objet',
            PRODUCER: 'Produit le {{publicationDate}} par',
            SPONSORS: 'Soutien institutionnel',
            RESEARCHER: 'Responsable{{value > 1 ? "s" : ""}} scientifique{{value > 1 ? "s" : ""}}',
            MANAGER: 'Responsable{{value > 1 ? "s" : ""}} informatique{{value > 1 ? "s" : ""}}',
            DESIGNER: 'Concepteur{{value > 1 ? "s" : ""}}',
            DEVELOPER: 'Responsable{{value > 1 ? "s" : ""}} technique{{value > 1 ? "s" : ""}}',
            AUTHOR: 'Auteur{{value > 1 ? "s" : ""}}',
            COMPILER: 'Compilateur{{value > 1 ? "s" : ""}}',
            TRANSCRIBER: 'Transcripteur{{value > 1 ? "s" : ""}}',
            SPONSOR: 'Sponsor{{value > 1 ? "s" : ""}}',
            SPACIAL: 'Lieux',
            TEMPORAL: 'Date de création',
            PREVIEW: 'Aperçu',
            PREVIEW_OF: 'Aperçu de',
            LOCATION: 'Localisation',
            CONTRIBUTOR: 'Contribution',
            DOWNLOAD: 'Téléchargement',
            DOWNLOAD_ALL: 'Vous allez télécharger la totalité des données de cette ressource {{value && value !=="" ? "("+value+")" : ""}}',
            DOWNLOAD_AGREEMENT: 'Le téléchargement de cette ressource vaut acceptation de la licence d\'utilisation.',
            LICENCE_DETAIL: 'Détails sur la licence',
            DEROGATION: 'Code du patrimoine',
            BIBLIOGRAPHIC_CITATION: 'Référence à citer',
            RESULTS_LABEL: 'Environ {{value}} résultat{{value > 1 ? "s" : ""}}',
            LINK: 'Lien',
            COMMERCIAL_LINKS: 'Distribution payante',
            COPYRIGHT: 'Copyright',
            SITE: 'Accéder au site',
            THUMBNAIL: 'Miniature',
            ALL_RESOURCE: 'Tout type de ressource',
            RESOURCE_TYPE: 'Type de ressource',
            DOCUMENTATIONS: 'Documentations',
            FACET: {
                CORPORA_TYPE: 'Type de corpus',
                ALL_CORPORA: 'Tous les corpus',
                ANNOTATION_LEVEL: 'Niveaux d\'annotations',
                ALL_ANNOTATION_LEVEL: 'Tout niveaux d\'annotations',
                TEXT_FORMAT: 'Format',
                ALL_TEXT_FORMAT: 'Tout format de texte',
                TEXT_ENCODING: 'Type Encodage',
                ALL_TEXT_ENCODING: 'Tout encodages de caractères',
                STATUS_OF_USE: 'Droits d\'utilisations',
                ALL_STATUS_OF_USE: 'Tous les droits d\'utilisations',
                CORPORA_LANG: 'Langue du corpus',
                ALL_LANG: 'Toutes les Langues',
                CORPORA_DATATYPES: 'Type de source',
                ALL_CORPORA_DATATYPES: 'Tout type de source',
                CORPORA_FILE_ENCODINGS: 'Encodage de caractères',
                CORPORA_LANGUAGE_TYPE: 'Type de langue',
                ALL_CORPORA_LANGUAGE_TYPE: 'Tout type de langue',
                CORPORA_STYLES: 'Genre du corpus',
                TOOL_LANGUAGE: 'Langue traitée',
                TOOL_FUNCTIONALITY: 'Fonctionnalité',
                ALL_TOOL_FUNCTIONALITY: 'Toutes les fonctionnalités',
                TOOL_INPUTDATA: 'Format en entrée',
                ALL_TOOL_INPUTDATA: 'Tout format en entrée',
                TOOL_OUTPUTDATA: 'Format en sortie',
                ALL_TOOL_OUTPUTDATA: 'Tout format en sortie',
                TOOL_FILE_ENCODINGS: 'Encodage de la donnée',
                ALL_TOOL_FILE_ENCODINGS: 'Tout encodage',
                LEXICON_INPUT_TYPE: 'Type d\'entrée',
                ALL_LEXICON_INPUT_TYPE: 'Tout type d\'entrée',
                LEXICON_DESCRIPTION_TYPE: 'Type de description',
                ALL_LEXICON_DESCRIPTION_TYPE: 'Tout type de description',
                LEXICON_INPUT_LANGUAGE: 'Langue des entrées',
                LEXICON_DESCRIPTION_LANGUAGE: 'Langue de description',
                LEXICON_FORMAT: 'Format',
                ALL_LEXICON_FORMAT: 'Tout format',
                LEXICON_LANGUAGE_TYPE: 'Type de langue',
                ALL_LEXICON_LANGUAGE_TYPE: 'Tout type de langue',
                PRODUCERS: 'Laboratoire producteur',
                ALL_PRODUCERS: 'Tout laboratoire producteur'
            },
            SORT: {
                TITLE: 'Titre',
                PUBLICATION_DATE: 'Date de publication'
            },
            SEARCH: {
                CORPORA: 'Rechercher un corpus',
                TOOLS: 'Rechercher un outil',
                LEXICONS: 'Rechercher un lexique',
                PRODUCERS: 'Rechercher un laboratoire producteur',
                ALL: 'Rechercher dans ORTOLANG'
            },
            SHOW_IN: 'Présentation',
            VIEW_MODE: {
                LINE: 'Par liste',
                GRID: 'Par icônes'
            },
            FACETS: 'Recherche avancée',
            MORE_FACETS: 'Plus de filtres',
            LESS_FACETS: 'Cacher les filtres supplémentaires',
            ACTIVATED_FILTERS: 'Filtres actifs',
            RESET_FILTERS: 'Tout supprimer',
            NO_ITEM: 'Aucune ressource disponible',
            NO_PRODUCER: 'Aucune institution productrice trouvées',
            PUBLISHED_ON: 'Publié le',
            ITEM_TYPE: {
                CORPORA: 'Corpus',
                LEXICON: 'Lexiques',
                TOOL: 'Outils',
                INTEGRATED_PROJECT: 'Projets Intégrés'
            }
        }
    });

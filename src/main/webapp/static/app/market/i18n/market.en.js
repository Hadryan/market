'use strict';

/**
 * @ngdoc service
 * @name ortolangMarketApp.MARKET_EN
 * @description
 * # MARKET_EN
 * Constant in the ortolangMarketApp.
 */
angular.module('ortolangMarketApp')
    .constant('MARKET_EN', {
        MARKET: {
            ALL_TYPE: 'All',
            RESOURCES: '({{value && value !=="" ? value : ""}} resource{{value > 1 ? "s" : ""}})',
            NEW_RESOURCES: 'Recent publications',
            NEW_CORPUS: 'New',
            FREE_CORPUS: 'Free to use',
            WRITTEN_CORPUS: 'Written corpus',
            SPEECH_CORPUS: 'Speeches corpus',
            MULTIMODAL_CORPUS: 'Multimodals corpus',
            SEE_MORE: 'See more',
            WEBSITES: 'Websites',
            WEBSITE: 'Website',
            SEARCH_PAGE: 'Search in data',
            REDACTOR_CHOICES: 'Redactor choices',
            CONDITIONS_OF_USE: 'Conditions of use',
            BROWSE: 'Browse',
            GO_BACK_INFO: 'Go back',
            ADD_TO_FAVOURITES: 'Add to my favourites',
            USE_IN_MY_PROJECT: 'Use in my project',
            ADDITIONAL_INFORMATION: 'Additional information',
            KEYWORDS: 'Keywords',
            EXTENT: 'Extent',
            PUBLICATIONS: 'Publications',
            PRIMARY_PUBLICATIONS: 'Reference publications',
            SECONDARY_PUBLICATIONS: 'Publications based on this item',
            EXTERNAL_RELATIONS: 'Relations with others resources',
            ALL_VERSIONS: 'All versions',
            PRIMARY_LANGUAGE: 'Primary language',
            DISCOURSE_TYPE: 'Discourse type',
            LINGUISTIC_SUBJECT: 'Linguistic subjects',
            PROGRAMMING_LANGUAGE: 'Programming languages',
            OPERATING_SYSTEM: 'Operating systems supported',
            SUPPORT_TOOL: 'Support tool',
            LANGUAGE: 'Languages',
            PRODUCER: 'Producing laborator{{::producerNumber > 1 ? "ies" : "y"}}:',
            SPONSORS: 'Institutional sponsors:',
            PUBLICATION_DATE: '<strong>Publication date:</strong> {{::publicationDate | date:"longDate"}}',
            RESEARCHER: 'Researcher{{value > 1 ? "s" : ""}}',
            MANAGER: 'Manager{{value > 1 ? "s" : ""}}',
            DESIGNER: 'Designer{{value > 1 ? "s" : ""}}',
            DEVELOPER: 'Developer{{value > 1 ? "s" : ""}}',
            AUTHOR: 'Author{{value > 1 ? "s" : ""}}',
            COMPILER: 'Compiler{{value > 1 ? "s" : ""}}',
            TRANSCRIBER: 'Transcriber{{value > 1 ? "s" : ""}}',
            SPONSOR: 'Sponsor{{value > 1 ? "s" : ""}}',
            SPACIAL: 'Spacial',
            TEMPORAL: 'Temporal',
            PREVIEW: 'Preview',
            PREVIEW_OF: 'Preview of:',
            LOCATION: 'Location',
            CONTRIBUTOR: 'Contributor',
            DOWNLOAD: 'Download',
            DOWNLOAD_ALL: 'You will download a complete archive of this resource {{value && value !=="" ? "("+value+")" : ""}}',
            DOWNLOAD_PART: 'You will download a part of this resource {{value && value !=="" ? "("+value+")" : ""}}',
            DOWNLOAD_AGREEMENT: 'Download implies the acceptance of the licence',
            LICENCE_DETAIL: 'License information',
            DEROGATION: 'Code du patrimoine',
            BIBLIOGRAPHIC_CITATION: 'Bibliographical citation',
            RESULTS_LABEL: '{{value}} result{{value > 1 ? "s" : ""}}',
            SITE: 'Go to website',
            LINK: 'Link',
            COMMERCIAL_LINKS: 'Commerical links',
            COPYRIGHT: 'Copyright',
            THUMBNAIL: 'Thumbnail',
            ALL_RESOURCE: 'All type of resources',
            RESOURCE_TYPE: 'Type of resource',
            DOCUMENTATIONS: 'Documentations',
            SEE_DOCUMENTATIONS: 'See the documentation',
            SEE_WEBSITE: 'Go to the website',
            ITEM_NOT_FOUND: 'Any resource has been found at this page',
            METADATA_FORMAT_NOT_FOUND: 'Metadata format unreadable.',
            NO_RESULT: 'No result found',
            ESR_ACCESSIBLE: 'Accessible to ESR members',
            FACET: {
                CORPORA_TYPE: 'Type of corpora',
                ALL_CORPORA: 'All corpus',
                ANNOTATION_LEVEL: 'Annotation levels',
                ALL_ANNOTATION_LEVEL: 'All annotation levels',
                TEXT_FORMAT: 'Formats',
                ALL_TEXT_FORMAT: 'All formats',
                TEXT_ENCODING: 'Text encodings',
                ALL_TEXT_ENCODING: 'All text encodings',
                STATUS_OF_USE: 'Conditions of use',
                ALL_STATUS_OF_USE: 'All conditions of use',
                CORPORA_LANG: 'Corpora languages',
                ALL_LANG: 'All languages',
                CORPORA_STUDY_LANG: 'Corpora study languages',
                CORPORA_DATATYPES: 'Data type',
                ALL_CORPORA_DATATYPES: 'All data type',
                CORPORA_FILE_ENCODINGS: 'Corpora file encodings',
                CORPORA_LANGUAGE_TYPE: 'Languages',
                ALL_CORPORA_LANGUAGE_TYPE: 'All languages',
                CORPORA_STYLES: 'Corpora nature',
                TOOL_LANGUAGE: 'Tool language',
                TOOL_FUNCTIONALITY: 'Functionalities',
                ALL_TOOL_FUNCTIONALITY: 'All functionalities',
                TOOL_INPUTDATA: 'Input data',
                ALL_TOOL_INPUTDATA: 'All input data',
                TOOL_OUTPUTDATA: 'Output data type',
                ALL_TOOL_OUTPUTDATA: 'All output data type',
                TOOL_FILE_ENCODINGS: 'File encoding',
                ALL_TOOL_FILE_ENCODINGS: 'All file encodings',
                LEXICON_INPUT_TYPE: 'Input type',
                ALL_LEXICON_INPUT_TYPE: 'All input types',
                LEXICON_DESCRIPTION_TYPE: 'Description type',
                ALL_LEXICON_DESCRIPTION_TYPE: 'All description types',
                LEXICON_INPUT_LANGUAGE: 'Lexicon input languages',
                LEXICON_DESCRIPTION_LANGUAGE: 'Description languages',
                LEXICON_FORMAT: 'Format',
                ALL_LEXICON_FORMAT: 'All format',
                LEXICON_LANGUAGE_TYPE: 'Language type',
                ALL_LEXICON_LANGUAGE_TYPE: 'All language types',
                PRODUCERS: 'Producer',
                ALL_PRODUCERS: 'All producers',
                RANKS: 'Availabilities',
                ALL_RANKS: 'All Availabilities'
            },
            SORT: {
                TITLE: 'Title',
                RANK: 'Availability',
                PUBLICATION_DATE: 'Publication date'
            },
            SEARCH: {
                CORPORA: 'Search for corpora',
                TOOLS: 'Search for tools',
                LEXICONS: 'Search for lexicons',
                TERMINOLOGIES: 'Search for a terminologies, thésaurus or ontologies',
                PRODUCERS: 'Search for a producer (name, acronym, city)',
                ALL: 'Search in ORTOLANG',
                BACK_TO_RESULTS: 'Back to results'
            },
            SHOW_IN: 'Show by',
            VIEW_MODE: {
                LINE: 'List',
                GRID: 'Icons'
            },
            FACETS: 'Advanced filters',
            MORE_FACETS: 'More filter',
            LESS_FACETS: 'Hide filters',
            ACTIVATED_FILTERS: 'Activated filters',
            RESET_FILTERS: 'Clear filters',
            NO_ITEM: 'No resource available',
            NO_CONTRIBUTOR_ITEMS: 'No resource',
            NO_PRODUCER: 'No producer available',
            PUBLISHED_ON: 'Published on',
            ITEM_TYPE: {
                CORPORA: 'Corpora',
                LEXICON: 'Lexicon',
                TOOL: 'Tool',
                INTEGRATED_PROJECT: 'Integrated Project'
            },
            CITATION_MODAL: {
                TITLE: 'How to cite this item',
                COMMANDS: 'Press <kbd><kbd>{{isMac ? "cmd" : "ctrl"}}</kbd> + <kbd>c</kbd></kbd> to copy'
            },
            CONTACT_MODAL: {
                TITLE: 'Contact the person responsible for this resource',
                SUBJECT: {
                    LABEL: 'Suject',
                    PLACEHOLDER: 'Suject of the message'
                },
                EMAIL: {
                    LABEL: 'Mail',
                    PLACEHOLDER: 'Your Email Address'
                },
                MESSAGE: {
                    LABEL: 'Message',
                    PLACEHOLDER: 'Tell her what is about'
                },
                SEND: 'Send the message'
            },
            DOWNLOAD_MODAL: {
                TITLE: 'Download',
                ADVANCED: 'Advanced download',
                REGEX: 'Regular expression',
                REGEX_HELP: 'Use a regular expression to download specific files only (example: <code>.*\\.xml</code> to download XML files only)',
                POLICY: 'I have read and agree to <a href="/information/policy" target="_blank">the ORTOLANG policy</a> as well as the license of this resource {{license ? \'(<a target="_blank" href="\' + licenseUrl + \'">\' + license + \'</a>)\' : ""}}',
                ANONYMOUS: '<strong>You are not connected to ORTOLANG.</strong> Some files of this resource might only be accessible to connected users and/or ESR members. If you do have an account, please login to ORTOLANG.',
                AUTHENTICATED: '<strong>You are connected to ORTOLANG but you are not an ESR member.</strong> Some files of this resource might only be accessible to ESR members.',
                ESR: 'You are connected to ORTOLANG and an ESR member.',
                SIZE: 'You are about to download a complete archive of this resource representing up to <strong>{{size | bytes}}</strong>.',
                MESSAGES: {
                    INVALID_REGEX: 'Invalid regular expression',
                    POLICY: 'You must accept the ORTOLANG policy as well as the resource license'
                }
            }
        }
    });

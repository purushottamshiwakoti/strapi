import type { Schema, Attribute } from '@strapi/strapi';

export interface ReusableComponentAboutIcons extends Schema.Component {
  collectionName: 'components_reusable_component_about_icons';
  info: {
    displayName: 'AboutIcons';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    Image: Attribute.Component<'shared.shared-image'>;
  };
}

export interface ReusableComponentAbout extends Schema.Component {
  collectionName: 'components_reusable_component_abouts';
  info: {
    displayName: 'About';
    icon: 'cup';
    description: '';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required;
    Position: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
    Image: Attribute.Component<'shared.shared-image'>;
    SocialMedia: Attribute.Component<'shared.social-media', true>;
  };
}

export interface ReusableComponentAuther extends Schema.Component {
  collectionName: 'components_reusable_component_authers';
  info: {
    displayName: 'Auther';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    FacebookLink: Attribute.Text;
    InstagramLink: Attribute.Text;
    TwitterLink: Attribute.Text;
    PinterestLink: Attribute.Text;
  };
}

export interface ReusableComponentBanner extends Schema.Component {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
    icon: 'check';
    description: '';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    ShowInput: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ButtonName: Attribute.String & Attribute.Required;
    BannerImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ReusableComponentCampagin extends Schema.Component {
  collectionName: 'components_reusable_component_campagins';
  info: {
    displayName: 'Campagin';
  };
  attributes: {
    BackgroundImage: Attribute.Media<'images'> & Attribute.Required;
    Banner: Attribute.Media<'images'> & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    SubTitle: Attribute.Text & Attribute.Required;
    GoalText: Attribute.String & Attribute.Required;
    GoalAmount: Attribute.BigInteger & Attribute.Required;
    RaisedText: Attribute.String & Attribute.Required;
    RaisedAmount: Attribute.BigInteger & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface ReusableComponentCarousel extends Schema.Component {
  collectionName: 'components_reusable_component_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'collapse';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface ReusableComponentConfirmVotes extends Schema.Component {
  collectionName: 'components_reusable_component_confirm_votes';
  info: {
    displayName: 'ConfirmVotes';
    icon: 'database';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Subtitle: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
    BackgroundImage: Attribute.Media<'images'> & Attribute.Required;
    BackgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    StarColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ReusableComponentDonationIcon extends Schema.Component {
  collectionName: 'components_shared_donation_icons';
  info: {
    displayName: 'DonationIcon';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Icon: Attribute.Component<'shared.shared-image'>;
    TitleColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ReusableComponentDonations extends Schema.Component {
  collectionName: 'components_reusable_component_donations';
  info: {
    displayName: 'Donation';
    icon: 'check';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    BackgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReusableComponentElectionDate extends Schema.Component {
  collectionName: 'components_reusable_component_election_dates';
  info: {
    displayName: 'ElectionDate';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    ShowElection: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ElectionDate: Attribute.Date;
    BackgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ReusableComponentFaq extends Schema.Component {
  collectionName: 'components_reusable_component_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

export interface ReusableComponentFeatures extends Schema.Component {
  collectionName: 'components_reusable_component_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images'>;
    Alt: Attribute.String & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
  };
}

export interface ReusableComponentFeedback extends Schema.Component {
  collectionName: 'components_reusable_component_feedbacks';
  info: {
    displayName: 'feedback';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    client_number: Attribute.Integer;
  };
}

export interface ReusableComponentHomeAbout extends Schema.Component {
  collectionName: 'components_reusable_component_home_abouts';
  info: {
    displayName: 'HomeAbout';
  };
  attributes: {
    Banner: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    MainTitle: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Icon1: Attribute.Media<'images'> & Attribute.Required;
    Icon1Title: Attribute.String & Attribute.Required;
    Icon1Description: Attribute.Text & Attribute.Required;
    Icon2: Attribute.Media<'images'> & Attribute.Required;
    Icon2Title: Attribute.String & Attribute.Required;
    Icon2Description: Attribute.Text & Attribute.Required;
  };
}

export interface ReusableComponentIndustriesService extends Schema.Component {
  collectionName: 'components_reusable_component_industries_services';
  info: {
    displayName: 'IndustriesService';
    description: '';
  };
  attributes: {
    services: Attribute.String & Attribute.Required;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReusableComponentMenu extends Schema.Component {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
  };
}

export interface ReusableComponentMission extends Schema.Component {
  collectionName: 'components_reusable_component_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface ReusableComponentNewsCampaign extends Schema.Component {
  collectionName: 'components_reusable_component_news_campaigns';
  info: {
    displayName: 'NewsCampaign';
    icon: 'attachment';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required;
  };
}

export interface ReusableComponentOurTeam extends Schema.Component {
  collectionName: 'components_reusable_component_our_teams';
  info: {
    displayName: 'Our Team';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReusableComponentReview extends Schema.Component {
  collectionName: 'components_reusable_component_reviews';
  info: {
    displayName: 'Review';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Designation: Attribute.String & Attribute.Required;
    Stars: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    Image: Attribute.Component<'shared.shared-image'>;
    Review: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    StarColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ReusableComponentServiceIcons extends Schema.Component {
  collectionName: 'components_reusable_component_service_icons';
  info: {
    displayName: 'ServiceIcons';
  };
  attributes: {
    Icon: Attribute.Component<'shared.shared-image'> & Attribute.Required;
    ButtonName: Attribute.String & Attribute.Required;
  };
}

export interface ReusableComponentServices extends Schema.Component {
  collectionName: 'components_reusable_component_services';
  info: {
    displayName: 'Services';
    icon: 'gate';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    SubTitle: Attribute.Text & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Icon: Attribute.Component<'reusable-component.service-icons', true>;
  };
}

export interface ReusableComponentSubCategory extends Schema.Component {
  collectionName: 'components_reusable_component_sub_categories';
  info: {
    displayName: 'Sub Category';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Slug: Attribute.String & Attribute.Required;
  };
}

export interface ReusableComponentTeam extends Schema.Component {
  collectionName: 'components_reusable_component_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
    Position: Attribute.String & Attribute.Required;
    ShowButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ReusableComponentVison extends Schema.Component {
  collectionName: 'components_reusable_component_visons';
  info: {
    displayName: 'Vison';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Missions: Attribute.Component<'reusable-component.mission', true>;
  };
}

export interface ShareTabsHeaderTabs extends Schema.Component {
  collectionName: 'components_share_tabs_header_tabs';
  info: {
    displayName: 'HeaderTabs';
    icon: 'apps';
  };
  attributes: {
    Home: Attribute.String & Attribute.Required;
    Products: Attribute.String & Attribute.Required;
    Blogs: Attribute.String & Attribute.Required;
    About_us: Attribute.String & Attribute.Required;
    Contact_us: Attribute.String & Attribute.Required;
  };
}

export interface SharedFooterCounter extends Schema.Component {
  collectionName: 'components_shared_footer_counters';
  info: {
    displayName: 'FooterCounter';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

export interface SharedFooterMenu extends Schema.Component {
  collectionName: 'components_shared_footer_menus';
  info: {
    displayName: 'FooterMenu';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
    SubMenu: Attribute.Component<'shared.sub-menu', true>;
    page: Attribute.Relation<
      'shared.footer-menu',
      'oneToOne',
      'api::page.page'
    >;
  };
}

export interface SharedMainTitle extends Schema.Component {
  collectionName: 'components_share_tabs_main_titles';
  info: {
    displayName: 'Main-title';
    description: '';
  };
  attributes: {
    Category: Attribute.String & Attribute.Required;
    Additional_category: Attribute.String & Attribute.Required;
    Our_brands: Attribute.String & Attribute.Required;
    Our_features: Attribute.String & Attribute.Required;
    Blogs: Attribute.String & Attribute.Required;
  };
}

export interface SharedQuestionAnswer extends Schema.Component {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'QuestionAnswer';
  };
  attributes: {
    Question: Attribute.String & Attribute.Required;
    Answer: Attribute.Text & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'link';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String & Attribute.Required;
    MetaDescription: Attribute.Text & Attribute.Required;
    OgTitle: Attribute.String;
    OgDescription: Attribute.Text;
    OgImage: Attribute.Media<'images'>;
    CanonicalUrl: Attribute.String;
  };
}

export interface SharedServcieIcon extends Schema.Component {
  collectionName: 'components_shared_servcie_icons';
  info: {
    displayName: 'ServcieIcon';
    icon: 'check';
  };
  attributes: {
    Icon: Attribute.Component<'shared.shared-image'> & Attribute.Required;
    ButtonName: Attribute.String & Attribute.Required;
  };
}

export interface SharedSharedImage extends Schema.Component {
  collectionName: 'components_shared_shared_images';
  info: {
    displayName: 'SharedImage';
    description: '';
  };
  attributes: {
    alt: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSocialMedia extends Schema.Component {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'SocialMedia';
    icon: 'twitter';
  };
  attributes: {
    Link: Attribute.String & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
  };
}

export interface SharedSubMenu extends Schema.Component {
  collectionName: 'components_shared_sub_menus';
  info: {
    displayName: 'SubMenu';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reusable-component.about-icons': ReusableComponentAboutIcons;
      'reusable-component.about': ReusableComponentAbout;
      'reusable-component.auther': ReusableComponentAuther;
      'reusable-component.banner': ReusableComponentBanner;
      'reusable-component.campagin': ReusableComponentCampagin;
      'reusable-component.carousel': ReusableComponentCarousel;
      'reusable-component.confirm-votes': ReusableComponentConfirmVotes;
      'reusable-component.donation-icon': ReusableComponentDonationIcon;
      'reusable-component.donations': ReusableComponentDonations;
      'reusable-component.election-date': ReusableComponentElectionDate;
      'reusable-component.faq': ReusableComponentFaq;
      'reusable-component.features': ReusableComponentFeatures;
      'reusable-component.feedback': ReusableComponentFeedback;
      'reusable-component.home-about': ReusableComponentHomeAbout;
      'reusable-component.industries-service': ReusableComponentIndustriesService;
      'reusable-component.menu': ReusableComponentMenu;
      'reusable-component.mission': ReusableComponentMission;
      'reusable-component.news-campaign': ReusableComponentNewsCampaign;
      'reusable-component.our-team': ReusableComponentOurTeam;
      'reusable-component.review': ReusableComponentReview;
      'reusable-component.service-icons': ReusableComponentServiceIcons;
      'reusable-component.services': ReusableComponentServices;
      'reusable-component.sub-category': ReusableComponentSubCategory;
      'reusable-component.team': ReusableComponentTeam;
      'reusable-component.vison': ReusableComponentVison;
      'share-tabs.header-tabs': ShareTabsHeaderTabs;
      'shared.footer-counter': SharedFooterCounter;
      'shared.footer-menu': SharedFooterMenu;
      'shared.main-title': SharedMainTitle;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.seo': SharedSeo;
      'shared.servcie-icon': SharedServcieIcon;
      'shared.shared-image': SharedSharedImage;
      'shared.social-media': SharedSocialMedia;
      'shared.sub-menu': SharedSubMenu;
    }
  }
}

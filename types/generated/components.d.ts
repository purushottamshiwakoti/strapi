import type { Schema, Attribute } from '@strapi/strapi';

export interface ReusableComponentFeatures extends Schema.Component {
  collectionName: 'components_reusable_component_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    Icon: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ReusableComponentFeedback extends Schema.Component {
  collectionName: 'components_reusable_component_feedbacks';
  info: {
    displayName: 'feedback';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    client_number: Attribute.Integer;
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
    img: Attribute.Media;
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
    img: Attribute.Media;
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

export interface SharedMenu extends Schema.Component {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
    SubMenu: Attribute.Component<'shared.sub-menu', true>;
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
    name: Attribute.String;
    property: Attribute.String;
    content: Attribute.Text;
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
    media: Attribute.Media;
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
      'reusable-component.features': ReusableComponentFeatures;
      'reusable-component.feedback': ReusableComponentFeedback;
      'reusable-component.industries-service': ReusableComponentIndustriesService;
      'reusable-component.our-team': ReusableComponentOurTeam;
      'reusable-component.sub-category': ReusableComponentSubCategory;
      'share-tabs.header-tabs': ShareTabsHeaderTabs;
      'shared.main-title': SharedMainTitle;
      'shared.menu': SharedMenu;
      'shared.seo': SharedSeo;
      'shared.shared-image': SharedSharedImage;
      'shared.sub-menu': SharedSubMenu;
    }
  }
}

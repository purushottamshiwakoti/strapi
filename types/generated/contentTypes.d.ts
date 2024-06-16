import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMenusMenu extends Schema.CollectionType {
  collectionName: 'menus';
  info: {
    name: 'Menu';
    displayName: 'Menu';
    singularName: 'menu';
    pluralName: 'menus';
    tableName: 'menus';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'plugin::menus.menu', 'title'> & Attribute.Required;
    items: Attribute.Relation<
      'plugin::menus.menu',
      'oneToMany',
      'plugin::menus.menu-item'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::menus.menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::menus.menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMenusMenuItem extends Schema.CollectionType {
  collectionName: 'menu_items';
  info: {
    name: 'MenuItem';
    displayName: 'Menu Item';
    singularName: 'menu-item';
    pluralName: 'menu-items';
    tableName: 'menu_items';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    order: Attribute.Integer;
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_parent', '_self', '_top']>;
    root_menu: Attribute.Relation<
      'plugin::menus.menu-item',
      'manyToOne',
      'plugin::menus.menu'
    > &
      Attribute.Required;
    parent: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'plugin::menus.menu-item'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutMeAboutMe extends Schema.SingleType {
  collectionName: 'about_mes';
  info: {
    singularName: 'about-me';
    pluralName: 'about-mes';
    displayName: 'About Me';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Gallery: Attribute.Component<'shared.shared-image', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SEO: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-me.about-me',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-me.about-me',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::about-me.about-me',
      'oneToMany',
      'api::about-me.about-me'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    singularName: 'about-us';
    pluralName: 'about-uses';
    displayName: 'About Us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    AboutTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    AboutDescription: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    StoryTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    StoryDescription: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FeaturedImage: Attribute.Component<'shared.shared-image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Gallery: Attribute.Component<'shared.shared-image', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SEO: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    AboutIcons: Attribute.Component<'reusable-component.about-icons', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::about-us.about-us',
      'oneToMany',
      'api::about-us.about-us'
    >;
    locale: Attribute.String;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Article';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    IsFeatured: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    Image: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    pages: Attribute.Relation<
      'api::article.article',
      'manyToMany',
      'api::page.page'
    >;
    comments: Attribute.Relation<
      'api::article.article',
      'oneToMany',
      'api::comment.comment'
    >;
    slug: Attribute.String &
      Attribute.CustomField<
        'plugin::slug.slug',
        {
          kw: 'Title';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    SEO: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::article.article',
      'oneToMany',
      'api::article.article'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCommentComment extends Schema.CollectionType {
  collectionName: 'comments';
  info: {
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'Comment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FullName: Attribute.String & Attribute.Required;
    Email: Attribute.Email & Attribute.Required;
    Comment: Attribute.Text & Attribute.Required;
    article: Attribute.Relation<
      'api::comment.comment',
      'manyToOne',
      'api::article.article'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.SingleType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'Contact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    LocationTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PhoneTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Phone: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    EmailTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Email: Attribute.Email &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SEO: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ShapeColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    DotsColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::contact.contact',
      'oneToMany',
      'api::contact.contact'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Logo: Attribute.Component<'shared.shared-image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    AboutTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    AboutDescription: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    GetInTouchTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Phone: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Email: Attribute.Email &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SocialMedia: Attribute.Component<'shared.social-media', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Counter: Attribute.Component<'shared.footer-counter', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FooterMenu: Attribute.Component<'shared.footer-menu', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CopyrightText: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    MenuTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    BackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    TextColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SeperatorColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CounterBackgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    CounterText: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    IconColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::footer.footer',
      'oneToMany',
      'api::footer.footer'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Announcement Bar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Menu: Attribute.Component<'reusable-component.menu', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    NewsCampaign: Attribute.Component<
      'reusable-component.news-campaign',
      true
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SocialMedia: Attribute.Component<'shared.social-media', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    BackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FontColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::header.header',
      'oneToMany',
      'api::header.header'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    SEO: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Banner: Attribute.Component<'reusable-component.banner'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Election: Attribute.Component<'reusable-component.election-date'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Services: Attribute.Component<'reusable-component.services'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    AboutSFM: Attribute.Component<'reusable-component.about'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DonationText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DonationDescription: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DonationIcons: Attribute.Component<
      'reusable-component.donation-icon',
      true
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    MovementTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    MovementDescription: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    MovementIcon: Attribute.Component<
      'reusable-component.donation-icon',
      true
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SocialMedia: Attribute.Component<'shared.social-media', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ReviewTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ReviewDescription: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Reviews: Attribute.Component<'reusable-component.review', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ConfirmVotes: Attribute.Component<'reusable-component.confirm-votes'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQSubTitle: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQ: Attribute.DynamicZone<['reusable-component.faq']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ShowDonationTitle: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    showServiceAs: Attribute.Enumeration<['Grid', 'Carousel']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'Grid'>;
    showDonationAs: Attribute.Enumeration<['Grid', 'Carousel']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'Grid'>;
    MovementStarColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ServicesStarColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    ShowServicesStar: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    ServicesBackgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    AboutSFMBackgroungColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    DonationBackgroungColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    FeaturedTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FeaturedDescription: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ShowFeaturedStar: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<true>;
    FeaturedStarColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    FeaturedBackgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    ReviewStarColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    FaqStarColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    FaqActiveColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Hero: Attribute.Component<'reusable-component.carousel', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Features: Attribute.Component<'reusable-component.features', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    About: Attribute.Component<'reusable-component.home-about'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Campagin: Attribute.Component<'reusable-component.campagin'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-page.home-page',
      'oneToMany',
      'api::home-page.home-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMessageMessage extends Schema.CollectionType {
  collectionName: 'messages';
  info: {
    singularName: 'message';
    pluralName: 'messages';
    displayName: 'Message';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Email: Attribute.Email &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Message: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::message.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::message.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::message.message',
      'oneToMany',
      'api::message.message'
    >;
    locale: Attribute.String;
  };
}

export interface ApiNavbarNavbar extends Schema.SingleType {
  collectionName: 'navbars';
  info: {
    singularName: 'navbar';
    pluralName: 'navbars';
    displayName: 'Header Menu';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Logo: Attribute.Component<'shared.shared-image'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    BackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    ShowButton: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    ButtonName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ButtonLink: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    showFlag: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::navbar.navbar',
      'oneToMany',
      'api::navbar.navbar'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Offline: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    articles: Attribute.Relation<
      'api::page.page',
      'manyToMany',
      'api::article.article'
    >;
    slug: Attribute.String &
      Attribute.CustomField<
        'plugin::slug.slug',
        {
          kw: 'Title';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    SEO: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::page.page',
      'oneToMany',
      'api::page.page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSeoSeo extends Schema.SingleType {
  collectionName: 'seos';
  info: {
    singularName: 'seo';
    pluralName: 'seos';
    displayName: 'SEO';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    GoogleAnalytics: Attribute.Text;
    GoogleTagsManager: Attribute.String;
    FacebookPexels: Attribute.Text;
    logo: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::seo.seo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::seo.seo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSubPageSubPage extends Schema.CollectionType {
  collectionName: 'sub_pages';
  info: {
    singularName: 'sub-page';
    pluralName: 'sub-pages';
    displayName: 'SubPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Slug: Attribute.UID<'api::sub-page.sub-page', 'Title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Offline: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    page: Attribute.Relation<
      'api::sub-page.sub-page',
      'oneToOne',
      'api::page.page'
    >;
    parents: Attribute.Relation<
      'api::sub-page.sub-page',
      'oneToMany',
      'api::sub-page.sub-page'
    >;
    children: Attribute.Relation<
      'api::sub-page.sub-page',
      'manyToOne',
      'api::sub-page.sub-page'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sub-page.sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sub-page.sub-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::sub-page.sub-page',
      'oneToMany',
      'api::sub-page.sub-page'
    >;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::menus.menu': PluginMenusMenu;
      'plugin::menus.menu-item': PluginMenusMenuItem;
      'api::about-me.about-me': ApiAboutMeAboutMe;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::article.article': ApiArticleArticle;
      'api::comment.comment': ApiCommentComment;
      'api::contact.contact': ApiContactContact;
      'api::footer.footer': ApiFooterFooter;
      'api::header.header': ApiHeaderHeader;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::message.message': ApiMessageMessage;
      'api::navbar.navbar': ApiNavbarNavbar;
      'api::page.page': ApiPagePage;
      'api::seo.seo': ApiSeoSeo;
      'api::sub-page.sub-page': ApiSubPageSubPage;
    }
  }
}

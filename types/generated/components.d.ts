import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutHero extends Schema.Component {
  collectionName: 'components_about_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.String;
    images: Attribute.Media;
  };
}

export interface AboutIntro extends Schema.Component {
  collectionName: 'components_about_intros';
  info: {
    displayName: 'intro';
    description: '';
  };
  attributes: {
    video: Attribute.Media;
    content: Attribute.Text;
    poster: Attribute.Media;
  };
}

export interface AboutLimits extends Schema.Component {
  collectionName: 'components_about_limits';
  info: {
    displayName: 'limits';
  };
  attributes: {
    heading: Attribute.Text;
    subhead: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface AboutSolutions extends Schema.Component {
  collectionName: 'components_about_solutions';
  info: {
    displayName: 'solutions';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface BlogHero extends Schema.Component {
  collectionName: 'components_blog_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface BlogList extends Schema.Component {
  collectionName: 'components_blog_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    isEnabled: Attribute.Boolean;
  };
}

export interface ContactCareers extends Schema.Component {
  collectionName: 'components_contact_careers';
  info: {
    displayName: 'careers';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
    button: Attribute.Component<'ui.button'>;
  };
}

export interface ContactForm extends Schema.Component {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subhead: Attribute.String;
    button: Attribute.Component<'ui.button'>;
    socials: Attribute.Component<'ui.button', true>;
    content: Attribute.Text;
    form: Attribute.Relation<'contact.form', 'oneToOne', 'api::form.form'>;
    video: Attribute.Media;
  };
}

export interface ContactHero extends Schema.Component {
  collectionName: 'components_contact_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface GivebackHero extends Schema.Component {
  collectionName: 'components_giveback_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.Text;
    subhead: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface GivebackHistory extends Schema.Component {
  collectionName: 'components_giveback_histories';
  info: {
    displayName: 'history';
  };
  attributes: {
    heading: Attribute.Text;
    subhead: Attribute.Text;
    content: Attribute.Text;
    url: Attribute.String;
    image: Attribute.Media;
  };
}

export interface GivebackPlans extends Schema.Component {
  collectionName: 'components_giveback_plans';
  info: {
    displayName: 'plans';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    video: Attribute.Media;
    heading: Attribute.Text;
  };
}

export interface HomeProjects extends Schema.Component {
  collectionName: 'components_home_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
    projects: Attribute.Relation<
      'home.projects',
      'oneToMany',
      'api::project.project'
    >;
    button: Attribute.Component<'ui.button'>;
  };
}

export interface HomeStrategy extends Schema.Component {
  collectionName: 'components_home_strategies';
  info: {
    displayName: 'strategy';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface HomeTestimonials extends Schema.Component {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    heading: Attribute.Text;
    items: Attribute.Component<'ui.testimonial', true>;
  };
}

export interface LegalContent extends Schema.Component {
  collectionName: 'components_legal_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface PostContent extends Schema.Component {
  collectionName: 'components_post_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface PostHero extends Schema.Component {
  collectionName: 'components_post_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.Text;
    readtime: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ProjectContent extends Schema.Component {
  collectionName: 'components_project_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'ui.content', true>;
  };
}

export interface ProjectHero extends Schema.Component {
  collectionName: 'components_project_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ProjectMedia extends Schema.Component {
  collectionName: 'components_project_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    video: Attribute.Media;
    image: Attribute.Media;
  };
}

export interface ProjectServices extends Schema.Component {
  collectionName: 'components_project_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'ui.text', true>;
    image: Attribute.Media;
  };
}

export interface ProjectsHero extends Schema.Component {
  collectionName: 'components_projects_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface ProjectsList extends Schema.Component {
  collectionName: 'components_projects_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    isEnabled: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ServiceCta extends Schema.Component {
  collectionName: 'components_service_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Text;
    button: Attribute.Component<'ui.button'>;
    email: Attribute.Component<'ui.button'>;
    socials: Attribute.Component<'ui.button', true>;
  };
}

export interface ServiceHero extends Schema.Component {
  collectionName: 'components_service_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.Text;
    subhead: Attribute.String;
    content: Attribute.Text;
  };
}

export interface ServiceInfo extends Schema.Component {
  collectionName: 'components_service_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    items: Attribute.Component<'ui.text-content', true>;
    image: Attribute.Media;
  };
}

export interface ServiceRelated extends Schema.Component {
  collectionName: 'components_service_relateds';
  info: {
    displayName: 'related';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    projects: Attribute.Relation<
      'service.related',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface ServicesHero extends Schema.Component {
  collectionName: 'components_services_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.Text;
    subhead: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface SharedCta extends Schema.Component {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'cta';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
    button: Attribute.Component<'ui.button'>;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.DefaultTo<'light'>;
  };
}

export interface SharedMarquee extends Schema.Component {
  collectionName: 'components_shared_marquees';
  info: {
    displayName: 'marquee';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    parallax: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedRelated extends Schema.Component {
  collectionName: 'components_shared_relateds';
  info: {
    displayName: 'related';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    project: Attribute.Relation<
      'shared.related',
      'oneToOne',
      'api::project.project'
    >;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.DefaultTo<'dark'>;
    post: Attribute.Relation<'shared.related', 'oneToOne', 'api::post.post'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedServices extends Schema.Component {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    services: Attribute.Relation<
      'shared.services',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface UiContent extends Schema.Component {
  collectionName: 'components_ui_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Text;
    background: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface UiFile extends Schema.Component {
  collectionName: 'components_ui_files';
  info: {
    displayName: 'file';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    types: Attribute.String;
    placeholder: Attribute.String;
    name: Attribute.String;
  };
}

export interface UiInput extends Schema.Component {
  collectionName: 'components_ui_inputs';
  info: {
    displayName: 'input';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    required: Attribute.Boolean;
    type: Attribute.Enumeration<['text', 'email', 'tel', 'number', 'checkbox']>;
    name: Attribute.String;
  };
}

export interface UiSelect extends Schema.Component {
  collectionName: 'components_ui_selects';
  info: {
    displayName: 'select';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    options: Attribute.Component<'ui.text', true>;
    name: Attribute.String;
  };
}

export interface UiTestimonial extends Schema.Component {
  collectionName: 'components_ui_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    content: Attribute.Text;
    name: Attribute.String;
    role: Attribute.String;
  };
}

export interface UiTextContent extends Schema.Component {
  collectionName: 'components_ui_text_contents';
  info: {
    displayName: 'textContent';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
  };
}

export interface UiText extends Schema.Component {
  collectionName: 'components_ui_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface UiThankyou extends Schema.Component {
  collectionName: 'components_ui_thankyous';
  info: {
    displayName: 'thankyou';
  };
  attributes: {
    heading: Attribute.Text;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.hero': AboutHero;
      'about.intro': AboutIntro;
      'about.limits': AboutLimits;
      'about.solutions': AboutSolutions;
      'blog.hero': BlogHero;
      'blog.list': BlogList;
      'contact.careers': ContactCareers;
      'contact.form': ContactForm;
      'contact.hero': ContactHero;
      'giveback.hero': GivebackHero;
      'giveback.history': GivebackHistory;
      'giveback.plans': GivebackPlans;
      'home.hero': HomeHero;
      'home.projects': HomeProjects;
      'home.strategy': HomeStrategy;
      'home.testimonials': HomeTestimonials;
      'legal.content': LegalContent;
      'post.content': PostContent;
      'post.hero': PostHero;
      'project.content': ProjectContent;
      'project.hero': ProjectHero;
      'project.media': ProjectMedia;
      'project.services': ProjectServices;
      'projects.hero': ProjectsHero;
      'projects.list': ProjectsList;
      'service.cta': ServiceCta;
      'service.hero': ServiceHero;
      'service.info': ServiceInfo;
      'service.related': ServiceRelated;
      'services.hero': ServicesHero;
      'shared.cta': SharedCta;
      'shared.marquee': SharedMarquee;
      'shared.meta-social': SharedMetaSocial;
      'shared.related': SharedRelated;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'ui.button': UiButton;
      'ui.content': UiContent;
      'ui.file': UiFile;
      'ui.input': UiInput;
      'ui.select': UiSelect;
      'ui.testimonial': UiTestimonial;
      'ui.text-content': UiTextContent;
      'ui.text': UiText;
      'ui.thankyou': UiThankyou;
    }
  }
}

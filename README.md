@relumie/ckeditor5-build-popconmarket
=================

This package is a custom-build based on [CKEditor 5 classic editor build](https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-build-classic)

Use like [CKEditor 5 classic editor build](https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-build-classic)

**Setting:**
- Korean interface
- Font size
- Underline, Strikethrough
- Text alignment
- No lists
- No image caption
- No indent/outdent (Not fully works on classic build)
- No table
- No CloudService
- No EasyImage
- No CKFinder
- No PasteFromOffice
- No Redo/Undo (Not perfectly works)
&nbsp;
- Image resize (_added on v.0.0.2_)
&nbsp;
- Image alignment (_added on v.0.0.5_)

&nbsp;
&nbsp;
##### ABOUT IMAGE UPLOADER
You can make your own custom image uploader with [this official documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/upload-adapter.html).
I use this build with [@ckeditor/ckeditor5-react](https://www.npmjs.com/package/@ckeditor/ckeditor5-react) and example codes are like this.
```
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@relumie/ckeditor5-build-popconmarket';
import YourOwnImageUploadAdapterPlugin from '../../rich_editor/your_own_image_upload_adapter_plugin';

<CKEditor
  editor={ ClassicEditor }
  ...
  config={ {
    extraPlugins: [
      YourOwnImageUploadAdapterPlugin //** YOUR OWN IMAGE UPLOAD ADAPTER PLUGIN
    ] 
  } }  
/>
```


&nbsp;
&nbsp;
##### ABOUT IMAGE ALIGNMENT
With this build, full and alignCenter alignment are available. CKEditor5's full alignment means full-line-center. But you can change it with some style changes.
Here are simple example codes.
```
// any_style_file.scss
/* default image ('full') to full-left align */
.ck-content .image:not(.image-style-align-center) {
  margin: 0 !important;
}

/* remove margins */
.ck-content figure {
  margin-inline-start: 0;
  margin-inline-end: 0;
}
```


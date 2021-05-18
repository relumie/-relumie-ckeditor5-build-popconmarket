/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import FontFamily from '@ckeditor/ckeditor5-font/src/fontFamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
// import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
// import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Link from '@ckeditor/ckeditor5-link/src/link';
// import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
// import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

class ClassicEditor extends ClassicEditorBase {}
class CoverEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	// FontFamily,
	FontSize,
	// FontColor,
	// FontBackgroundColor,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	BlockQuote,
	// CKFinder,
	// CloudServices,
	// EasyImage,
	Heading,
	Image,
	// ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Alignment,
	Link,
	// List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	// Table,
	// TableToolbar,
	TextTransformation
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			// 'heading',
			//'fontFamily',
			'fontSize',
			//'fontColor',
			//'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'alignment:justify', 
			'alignment:left', 
			'alignment:center',
			'alignment:right', 
			'|',
			'blockQuote',
			'link',
			'uploadImage',
			// 'insertTable',
			'mediaEmbed',
			// '|',
			// 'undo',
			// 'redo'
		]
	},

	// fontFamily: {
	// 	options: [
	// 			'Noto Sans KR',
	// 			'Segoe UI',
	// 			'Batang',
	// 			'Gungsuh',
	// 			'Ubuntu, Arial, sans-serif',
	// 			'Ubuntu Mono, Courier New, Courier, monospace'
	// 	]
	// },

	fontSize: {
		options: [
			'tiny',
			'small',
			'default',
			'big',
			'huge'
		]
	},


	// fontColor: {
	// 	// Display 6 columns in the color grid.
	// 	columns: 5,

	// 	// And 12 document colors (2 rows of them).
	// 	documentColors: 10,
	// },
	// fontBackgroundColor: {
	// 	// Remove the "Document colors" section.
	// 	documentColors: 4,
	// },
	
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignCenter',
			'|',
			'imageTextAlternative'
		],
		styles: [
			'full', 'alignCenter'
		]
	},

	mediaEmbed: {
		previewsInData: true
	},

	// table: {
	// 	contentToolbar: [
	// 		'tableColumn',
	// 		'tableRow',
	// 		'mergeTableCells'
	// 	]
	// },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'ko'
};





CoverEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	// FontFamily,
	FontSize,
	// FontColor,
	// FontBackgroundColor,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	// BlockQuote,
	// CKFinder,
	// CloudServices,
	// EasyImage,
	// Heading,
	Image,
	// ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Alignment,
	// Link,
	// List,
	// MediaEmbed,
	Paragraph,
	PasteFromOffice,
	// Table,
	// TableToolbar,
	TextTransformation
];

// Editor configuration.
CoverEditor.defaultConfig = {
	toolbar: {
		items: [
			// 'heading',
			// 'fontFamily',
			'fontSize',
			// 'fontColor',
			// 'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'alignment:justify', 
			'alignment:left', 
			'alignment:center',
			'alignment:right', 
			'|',
			// 'blockQuote',
			// 'link',
			'uploadImage',
			// 'insertTable',
			// 'mediaEmbed',
			// '|',
			// 'undo',
			// 'redo'
		]
	},

	// fontFamily: {
	// 	options: [
	// 			'Noto Sans KR',
	// 			'Segoe UI',
	// 			'Batang',
	// 			'Gungsuh',
	// 			'Ubuntu, Arial, sans-serif',
	// 			'Ubuntu Mono, Courier New, Courier, monospace'
	// 	]
	// },

	// fontSize: {
	// 	options: [
	// 		'tiny',
	// 		'small',
	// 		'default',
	// 		'big',
	// 		'huge'
	// 	]
	// },


	// fontColor: {
	// 	// Display 6 columns in the color grid.
	// 	columns: 5,

	// 	// And 12 document colors (2 rows of them).
	// 	documentColors: 10,
	// },
	// fontBackgroundColor: {
	// 	// Remove the "Document colors" section.
	// 	documentColors: 4,
	// },
	
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignCenter',
			// '|',
			// 'imageTextAlternative'
		],
		styles: [
			'full', 'alignCenter'
		]
	},

	// mediaEmbed: {
	// 	previewsInData: true
	// },

	// table: {
	// 	contentToolbar: [
	// 		'tableColumn',
	// 		'tableRow',
	// 		'mergeTableCells'
	// 	]
	// },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'ko'
};

export default {
	ClassicEditor, CoverEditor
};
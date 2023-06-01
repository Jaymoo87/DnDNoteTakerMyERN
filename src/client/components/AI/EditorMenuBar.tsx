import React from 'react';

import { Editor } from '@tiptap/react';

import { TbLetterH, TbBold, TbItalic, TbStrikethrough, TbList, TbListNumbers } from 'react-icons/tb';
import { FaParagraph } from 'react-icons/fa';

type EditorMenuBarProps = {
  editor: Editor | null;
};

const EditorMenuBar = ({ editor }: EditorMenuBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active bg-gray-900 text-white p-1 rounded-md' : 'p-1'
          }
        >
          <div className="flex">
            <TbLetterH /> <span className="text-xs ">1</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active bg-gray-900 text-white p-1 rounded-md' : 'p-1'
          }
        >
          <div className="flex ">
            <TbLetterH /> <span className="text-xs">2</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active bg-gray-900 text-white p-1 rounded-md' : 'p-1'
          }
        >
          <div className="flex ">
            <TbLetterH /> <span className="text-xs">3</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active  bg-gray-900 text-white p-1 rounded-md' : 'p-1'}
        >
          <TbBold className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active  bg-gray-900 text-white p-1 rounded-md' : 'p-1'}
        >
          <TbItalic className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'bg-gray-900 text-white p-1 rounded-md' : 'p-1'}
        >
          <FaParagraph className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active  bg-gray-900 text-white p-1 rounded-md' : 'p-1'}
        >
          <TbStrikethrough className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active bg-gray-900 text-white p-1 rounded-md' : 'p-1'}
        >
          <TbList className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active bg-gray-900 text-white p-1 rounded-md' : 'p-1'}
        >
          <TbListNumbers className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default EditorMenuBar;

{
  /* UNUSED FREE TIER BUTTONS  */
}
{
  /*   <button
type="button"
onClick={() => editor.chain().focus().toggleCode().run()}
disabled={!editor.can().chain().focus().toggleCode().run()}
className={editor.isActive('code') ? 'is-active' : ''}
>
code
</button>
<button type="button" onClick={() => editor.chain().focus().unsetAllMarks().run()}>
clear marks
</button>
<button type="button" onClick={() => editor.chain().focus().clearNodes().run()}>
clear nodes
</button>
<button
type="button"
onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
>
h4
</button>
<button
type="button"
onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
>
h5
</button>
<button
type="button"
onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
>
h6
</button>


<button
type="button"
onClick={() => editor.chain().focus().toggleCodeBlock().run()}
className={editor.isActive('codeBlock') ? 'is-active' : ''}
>
code block
</button>
<button
type="button"
onClick={() => editor.chain().focus().toggleBlockquote().run()}
className={editor.isActive('blockquote') ? 'is-active' : ''}
>
blockquote
</button>
<button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
horizontal rule
</button>
<button type="button" onClick={() => editor.chain().focus().setHardBreak().run()}>
hard break
</button>
<button
type="button"
onClick={() => editor.chain().focus().undo().run()}
disabled={!editor.can().chain().focus().undo().run()}
>
undo
</button>
<button
type="button"
onClick={() => editor.chain().focus().redo().run()}
disabled={!editor.can().chain().focus().redo().run()}
>
redo
</button> */
}

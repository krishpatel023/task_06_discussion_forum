import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
// import { TRANSFORMERS } from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';

import {
  $convertToMarkdownString,
  TRANSFORMERS,
} from '@lexical/markdown';

import './styles.css'

import Showdown, {Converter} from "showdown";
import { useEffect, useState } from "react";
import MarkdownView from 'react-showdown';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function Placeholder({data}) {
  return <div className="editor-placeholder">{data?data:null}</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  readOnly: true,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

const Update = ({ value }) => {
  const [editor2] = useLexicalComposerContext();

  useEffect(() => {
    if (value) {
      editor2.setEditorState(value);
    }
  }, [editor2, value]);

  return null;
};
  

export default function Preview({data}) {

    const [editor] = useLexicalComposerContext()
        
    useEffect(() => {
        editor.update(() => {
        if (data) {
            editor.setEditorState(editor.parseEditorState(data))
        }
        })
    },[])
    const [display,setDisplay]=useState()


    data.read(() => {
      const editorStateWithoutSelection = editorState.clone(null);
      setDisplay(editorStateWithoutSelection);
    });
    return (
    <div className="hello">
      <LexicalComposer
        initialConfig={{
          onError(error) {
            throw error;
          },
          readOnly: true,
          nodes: []
        }}
      >
        <Update value={display} />
        <RichTextPlugin
          placeholder={null}
          contentEditable={<ContentEditable />}
        />
      </LexicalComposer>
    </div>
  );
}
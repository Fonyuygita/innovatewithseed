import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichTextRenderer = ({ content }: any) => {
    return <div>{documentToReactComponents(content)}</div>;
};

export default RichTextRenderer;

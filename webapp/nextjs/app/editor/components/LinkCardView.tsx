import { NodeViewWrapper, NodeViewProps } from '@tiptap/react';
import styles from '../page.module.css';

export const LinkCardView = (props: NodeViewProps) => {
    const { node } = props;
    const { url, title, description, image } = node.attrs;

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <NodeViewWrapper className={styles.linkCardWrapper}>
            <div
                className={styles.linkCardContainer}
                onClick={handleClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleClick(e as any);
                    }
                }}
            >
                <div className={styles.linkCardContent}>
                    <h3 className={styles.linkCardTitle}>{title || url}</h3>
                    {description && <p className={styles.linkCardDescription}>{description}</p>}
                    <span className={styles.linkCardUrl}>{url}</span>
                </div>
                {image ? (
                    <div className={styles.linkCardImageContainer}>
                        <img src={image} alt={title || 'Link thumbnail'} className={styles.linkCardImage} />
                    </div>
                ) : (
                    <div className={styles.linkCardImagePlaceholder}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </div>
                )}
            </div>
        </NodeViewWrapper>
    );
};

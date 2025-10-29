import { useEffect } from 'react';

const ScreenshotModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title} - Screenshots</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="modal-images">
              {project.screenshots.map((screenshot, index) => (
                <div key={index}>
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption || `${project.title} screenshot ${index + 1}`}
                    className="modal-image"
                  />
                  {screenshot.caption && (
                    <p className="modal-image-caption">{screenshot.caption}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              Screenshots coming soon! This project is currently in development or documentation phase.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotModal;

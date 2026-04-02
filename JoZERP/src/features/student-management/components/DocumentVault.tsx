import React from 'react';
import { Eye, Trash2, Plus } from 'lucide-react';
import '../styles/DocumentVault.css';
import { DocumentInfo } from '../interfaces/DocumentInfo';

const initialDocuments: DocumentInfo[] = [
  { id: '1', title: '10th Marksheet', required: true, status: 'uploaded', fileName: 'marksheet_10.pdf', uploadDate: '2024-05-10' },
  { id: '2', title: '12th Marksheet', required: true, status: 'uploaded', fileName: 'marksheet_12.pdf', uploadDate: '2024-05-10' },
  { id: '3', title: 'Transfer Certificate', required: false, status: 'pending' },
  { id: '4', title: 'Aadhar Card', required: true, status: 'pending' },
  { id: '5', title: 'Community Certificate', required: false, status: 'pending' },
  { id: '6', title: 'Passport Size Photograph', required: false, status: 'pending' },
  { id: '7', title: 'Signature', required: false, status: 'pending' },
];

const DocumentVault: React.FC = () => {
  const [docList, setDocList] = React.useState<DocumentInfo[]>(initialDocuments);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocList(prev => prev.map(doc => {
        if (doc.id === id) {
          return {
            ...doc,
            status: 'uploaded',
            fileName: file.name,
            uploadDate: new Date().toISOString().split('T')[0]
          };
        }
        return doc;
      }));
      // Reset input value to allow re-uploading same file if needed
      e.target.value = '';
    }
  };

  const handleDelete = (id: string) => {
    setDocList(prev => prev.map(doc => {
      if (doc.id === id) {
        const { fileName, uploadDate, ...rest } = doc;
        return { ...rest, status: 'pending' };
      }
      return doc;
    }));
  };

  return (
    <div className="document-vault">
      <div className="document-grid">
        {docList.map((doc) => (
          <div key={doc.id} className="document-card">
            <div className="doc-content">
              <h3 className="doc-title">
                {doc.title} {doc.required && <span className="required-star">*</span>}
              </h3>
              {doc.status === 'uploaded' ? (
                <div className="doc-info">
                  <span className="file-pill">{doc.fileName}</span>
                  <span className="upload-date">Uploaded on {doc.uploadDate}</span>
                </div>
              ) : (
                <p className="not-uploaded">Not uploaded yet</p>
              )}
            </div>
                <div className="doc-actions">
                  {doc.status === 'uploaded' ? (
                    <div className="action-icons">
                      <button className="icon-btn view-btn" title="View">
                        <Eye size={15} />
                      </button>
                      <button className="icon-btn delete-btn" title="Delete" onClick={() => handleDelete(doc.id)}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <label htmlFor={`file-upload-${doc.id}`} className="upload-btn">
                        Upload <Plus size={14} />
                      </label>
                      <input 
                        id={`file-upload-${doc.id}`}
                        type="file" 
                        className="hidden-file-input"
                        accept=".pdf,.jpeg,.jpg,.png"
                        onChange={(e) => handleFileChange(e, doc.id)}
                        style={{ 
                          position: 'absolute', 
                          width: '1px', 
                          height: '1px', 
                          padding: '0', 
                          margin: '-1px', 
                          overflow: 'hidden', 
                          clip: 'rect(0,0,0,0)', 
                          border: '0' 
                        }}
                      />
                    </>
                  )}
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentVault;

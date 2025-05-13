import React from 'react';
import { 
  BookOpen, CheckSquare, CheckCircle, FileText, 
  FilePlus, Heart, Users, Activity, User, FileSignature 
} from 'lucide-react';

interface ProcedureIconProps {
  iconName: string;
  className?: string;
}

const ProcedureIcon: React.FC<ProcedureIconProps> = ({ iconName, className = "" }) => {
  const renderIcon = () => {
    switch (iconName) {
      case 'id-card':
        return <BookOpen className={className} />;
      case 'check-square':
        return <CheckSquare className={className} />;
      case 'check-circle':
        return <CheckCircle className={className} />;
      case 'file-text':
        return <FileText className={className} />;
      case 'file-signature':
        return <FileSignature className={className} />;
      case 'heart':
        return <Heart className={className} />;
      case 'users':
        return <Users className={className} />;
      case 'activity':
        return <Activity className={className} />;
      case 'user':
        return <User className={className} />;
      case 'book':
        return <BookOpen className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  return renderIcon();
};

export default ProcedureIcon;
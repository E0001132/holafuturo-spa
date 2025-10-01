import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { ContainerStateProps } from '@adobe/aem-spa-component-mapping';

// 1. Interfaz para las propiedades específicas que quieres que AEM envíe
interface MiComponenteProps {
    title: string;       // Ejemplo: el título ingresado en el diálogo de AEM
    description: string; // Ejemplo: un campo de texto
    isLink: boolean;     // Ejemplo: un checkbox (boolean)
    // Otras propiedades específicas de tu componente
}

// 2. Interfaz completa del componente (incluye el estado del contenedor de AEM)
interface FullMiComponenteProps extends MiComponenteProps, ContainerStateProps {
    // AEM automáticamente agrega estas propiedades para la edición:
    cqPath?: string;      // Ruta del componente en JCR
    isInEditor: boolean; // True si el componente está siendo editado en AEM
}

// Componente React funcional
const MiComponente: React.FC<FullMiComponenteProps> = (props) => {
    // Si no hay título ni descripción, y NO estamos en el editor de AEM, no renderizar nada.
    if (!props.title && !props.description && !props.isInEditor) {
        return null;
    }

    const titleText = props.title || (props.isInEditor ? 'Haz doble clic para editar el Título' : '');
    const descriptionText = props.description || (props.isInEditor ? 'Añade una descripción aquí' : '');

    return (
        <div className={`cmp-micomponente ${props.isLink ? 'cmp-micomponente--linkable' : ''}`}>
            <h2>{titleText}</h2>
            <p>{descriptionText}</p>
            {
                props.isInEditor && !props.title && (
                    <p style={{ color: 'red' }}>Componente vacío: Título requerido.</p>
                )
            }
        </div>
    );
};

// Exportar el componente
export default MiComponente;

// El resourceType debe coincidir con la ruta en ui.apps/src/main/content/jcr_root/apps/holafuturospa/components/micomponente
MapTo('holafuturospa/components/micomponente')(MiComponente);
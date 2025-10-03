package mx.com.holafuturo.core.models;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
    adaptables = org.apache.sling.api.resource.Resource.class,
    adapters = { DemoModel.class, ComponentExporter.class },
    resourceType = DemoModel.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DemoModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "myproject/components/helloworld";

    @ValueMapValue
    private String message;

    @ValueMapValue
    private String color;

    public String getMessage() {
        return message;
    }

    public String getColor() {
        return color;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}


package com.ag.tvs.controller;

import static org.codehaus.jackson.map.DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.AnnotationIntrospector;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.codehaus.jackson.map.introspect.JacksonAnnotationIntrospector;
import org.codehaus.jackson.map.type.TypeFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ag.tvs.data.SimpleProduct;

@Controller
@RequestMapping("/")
public class ProductFinderController {

    private static List<SimpleProduct> products = new ArrayList<SimpleProduct> ();

    static {
        URL url = ProductFinderController.class.getResource("../products.json");
        ObjectMapper mapper = ProductFinderController.getObjectMapper();


        File jsonFile = new File(url.getPath());
        try {
            products = mapper.readValue(
                    jsonFile,
                    TypeFactory.defaultInstance().constructCollectionType(
                            List.class, SimpleProduct.class));
        } catch (JsonParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (JsonMappingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    @RequestMapping(value = "/api/product/{id}", method = RequestMethod.GET)
    public @ResponseBody
    SimpleProduct getProductById(@PathVariable("id") long id) {
        SimpleProduct retVal = null;
        for(SimpleProduct product : products) {
            if(product.getId() == id) {
                retVal = product;
                break;
            }
        }
        return retVal;
    }


    @RequestMapping(value = "/api/products", method = RequestMethod.GET)
    public @ResponseBody
    List<SimpleProduct> getProducts() {
        return ProductFinderController.products;
    }

    @RequestMapping(value = "/maintest/{id}", method = RequestMethod.GET)
    public String getProductByIdV2(@PathVariable("id") long id, Model theModel) {
        SimpleProduct retVal = null;
        for(SimpleProduct product : products) {
            if(product.getId() == id) {
                retVal = product;
                System.out.println("V2 Product: "+retVal);
                break;
            }
        }
        ObjectMapper mapper = ProductFinderController.getObjectMapper();

        try {
            theModel.addAttribute("data", mapper.writeValueAsString(products));
            theModel.addAttribute("products", products);
        } catch (JsonGenerationException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (JsonMappingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return "maintest";
    }

    public static ObjectMapper getObjectMapper() {

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setAnnotationIntrospector(AnnotationIntrospector.pair(
                new JacksonAnnotationIntrospector(),
                new JacksonAnnotationIntrospector()));
        objectMapper.configure(FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper
        .setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);

        return objectMapper;
    }

}
package com.ag.tvs.data;

import static org.codehaus.jackson.map.DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.AnnotationIntrospector;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.codehaus.jackson.map.introspect.JacksonAnnotationIntrospector;


public class ProductDataManager {
	
	private static final Logger LOGGER = Logger.getLogger(ProductDataManager.class);
	
	private static final String SQL_DB_ALL_PRODUCTS = "select * from WMT_BASE_PRODUCT";
	private static final String SQL_DB_PRODUCT_BY_ID = "select * from WMT_BASE_PRODUCT where id = ?";
	private static final String SQL_DB_PRODUCTS_BY_ID = "select * from WMT_BASE_PRODUCT where id in (?)";
	
	public static List<SimpleProduct> getAllProducts() {
		
		List<SimpleProduct> products = new ArrayList<SimpleProduct>();
		Connection conn = ProductDataManager.getJNDIConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			pstmt = conn.prepareStatement(ProductDataManager.SQL_DB_ALL_PRODUCTS);
			rs = pstmt.executeQuery();
			if (rs != null) {
				
				while (rs.next()) {
					SimpleProduct product = new SimpleProduct();
					product = ProductDataManager.buildProductFromRS(rs);
					products.add(product);
				}
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				rs.close();
				pstmt.close();
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return products;
	}
	
	public static SimpleProduct getProductById(Integer id) {
		
		SimpleProduct product = null;
		Connection conn = ProductDataManager.getJNDIConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			pstmt = conn.prepareStatement(ProductDataManager.SQL_DB_PRODUCT_BY_ID);
			pstmt.setInt(1, id);
			rs = pstmt.executeQuery();
			if (rs != null) {
				while (rs.next()) {
					product = ProductDataManager.buildProductFromRS(rs);
				}
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				rs.close();
				pstmt.close();
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return product;
	}
	
	public static SimpleProduct buildProductFromRS (ResultSet rs) {
		SimpleProduct simpleProduct = new SimpleProduct();
		try {
			simpleProduct.setId(rs.getInt(1));
			simpleProduct.setUrl(rs.getString(2));
			simpleProduct.setName(rs.getString(3));
			simpleProduct.setSize(rs.getInt(4));
			simpleProduct.setListPrice(rs.getDouble(5));
			simpleProduct.setPrice(rs.getDouble(6));
			simpleProduct.setImage(rs.getString(7));
			simpleProduct.setDescription(rs.getString(8));
			simpleProduct.setRating(rs.getDouble(9));
			LOGGER.info(simpleProduct.toString());
		} catch (SQLException e) {
			LOGGER.error("Exception processing result set." + e);
		}	
		return simpleProduct;
		
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
	
	private static Connection getJNDIConnection() {
	
		Context initContext;
		Connection conn = null;
		try {
			initContext = new InitialContext();
			Context envContext  = (Context)initContext.lookup("java:/comp/env");
			DataSource ds = (DataSource)envContext.lookup("jdbc/TestDB");
			conn = ds.getConnection();
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return conn;
	}
	
	
}

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
	
	public static List<SimpleProduct> getAllProducts() {
		
		String SQL = "select * from WMT_BASE_PRODUCT";
		List<SimpleProduct> products = new ArrayList<SimpleProduct>();
		Connection conn = ProductDataManager.getJNDIConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery();
			if (rs != null) {
				
				while (rs.next()) {
					SimpleProduct sProduct = new SimpleProduct();
					sProduct.setId(rs.getInt(1));
					sProduct.setUrl(rs.getString(2));
					sProduct.setName(rs.getString(3));
					sProduct.setSize(rs.getInt(4));
					sProduct.setListPrice(rs.getDouble(5));
					sProduct.setPrice(rs.getDouble(6));
					sProduct.setImage(rs.getString(7));
					sProduct.setDescription(rs.getString(8));
					sProduct.setRating(rs.getDouble(9));
					products.add(sProduct);
					LOGGER.info(sProduct.toString());
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

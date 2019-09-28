package com.blackstone.spring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.blackstone.spring.controller"))
				.paths(PathSelectors.regex("/.*"))
				.build()
				.apiInfo(apiEndpointsInfo());
	}
	
	private ApiInfo apiEndpointsInfo() {
		return  new ApiInfoBuilder()
				.title("Blackstone API resources")
				.contact(new Contact("Nabin", null, "naabin@outlook.com"))
				.version("1.0.0")
				.description("Api endpoints of Blackstone Cafe")
				.build();
	}
}

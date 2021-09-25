export const getDataSchema = {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "data": {
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "basePrice": {
                    "type": "integer"
                  },
                  "categories": {
                    "type": "array",
                    "items": {}
                  },
                  "courseDescription": {
                    "type": "string"
                  },
                  "courseName": {
                    "type": "string"
                  },
                  "courseSerial": {
                    "type": "string"
                  },
                  "createdAt": {
                    "type": "string"
                  },
                  "imageUrl": {
                    "type": "string"
                  },
                  "instructors": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "description": {
                            "type": "string"
                          },
                          "jobTitle": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "profilePicture": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "description",
                          "jobTitle",
                          "name",
                          "profilePicture"
                        ]
                      }
                    ]
                  },
                  "introductionVideoThumbnailURL": {
                    "type": "string"
                  },
                  "introductionVideoURL": {
                    "type": "string"
                  },
                  "isSubscribed": {
                    "type": "boolean"
                  },
                  "location": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "marketType": {
                    "type": "string"
                  },
                  "merchantSerial": {
                    "type": "string"
                  },
                  "price": {
                    "type": "integer"
                  },
                  "rating": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "tags": {
                    "type": "array",
                    "items": {}
                  },
                  "totalRating": {
                    "type": "integer"
                  },
                  "transactional": {
                    "type": "string"
                  },
                  "updatedAt": {
                    "type": "string"
                  }
                },
                "required": [
                  "basePrice",
                  "categories",
                  "courseDescription",
                  "courseName",
                  "courseSerial",
                  "createdAt",
                  "imageUrl",
                  "instructors",
                  "introductionVideoThumbnailURL",
                  "introductionVideoURL",
                  "isSubscribed",
                  "location",
                  "marketType",
                  "merchantSerial",
                  "price",
                  "rating",
                  "slug",
                  "tags",
                  "totalRating",
                  "transactional",
                  "updatedAt"
                ]
              }
            ]
          },
          "page": {
            "type": "integer"
          },
          "pageSize": {
            "type": "integer"
          },
          "recommendationID": {
            "type": "string"
          },
          "searchAlgoID": {
            "type": "string"
          },
          "totalCourse": {
            "type": "integer"
          },
          "totalPage": {
            "type": "integer"
          }
        },
        "required": [
          "data",
          "page",
          "pageSize",
          "recommendationID",
          "searchAlgoID",
          "totalCourse",
          "totalPage"
        ]
      },
      "status": {
        "type": "string"
      },
      "message": {
        "type": "string"
      }
    },
    "required": [
      "data",
      "status",
      "message"
    ]
  }
